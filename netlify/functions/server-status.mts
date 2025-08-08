import * as dgram from "dgram";
import {
  type ServerInfo,
  type InitData,
  type UdpRequest,
  response,
  battleMode,
  requestType,
} from "src/types/server-status";
import { type Context } from "@netlify/functions";

const MAX_REQUEST_RETRIES = 3;
const MAX_RESPONSE_SIZE = 256;
const VELOREN_HEADER = Buffer.from("veloren");
const VERSION = 0;

type DeserializedResponse =
  | { type: "Response"; data: ServerInfo }
  | { type: "Init"; data: InitData };

const serializeRequest = (request: UdpRequest) => {
  const pBuffer = new ArrayBuffer(8);
  new DataView(pBuffer).setBigUint64(0, request.p);
  const requestBuffer = new ArrayBuffer(1);
  new DataView(requestBuffer).setUint8(0, request.request);
  const requestSize = MAX_RESPONSE_SIZE + VELOREN_HEADER.length;

  const finalBuffer = new Uint8Array(requestSize);
  const finalView = new DataView(finalBuffer.buffer);

  let offset = 0;

  // Write the version (u16)
  finalView.setUint16(offset, VERSION, true);
  offset += 2;

  // Write the p field (u64)
  finalBuffer.set(new Uint8Array(pBuffer), offset);
  offset += 8;

  // Add the 3-byte offset of zeros. The buffer is zero-initialized by default
  offset += 3;

  // Write the request discriminant (u8)
  finalBuffer.set(new Uint8Array(requestBuffer), offset);
  offset += 1;

  // Append the header
  finalBuffer.set(VELOREN_HEADER, MAX_RESPONSE_SIZE);

  return finalBuffer;
};

const deserializeResponse = (buffer: Buffer): DeserializedResponse => {
  let offset = 3;
  const responseType = buffer.readUInt8(offset);
  offset += 1;

  switch (responseType) {
    case response.response:
      offset += 4;
      return {
        type: "Response",
        data: {
          players_count: buffer.readUInt16BE(offset + 12),
          player_cap: buffer.readUInt16BE(offset + 14),
          battlemode:
            battleMode[
              buffer.readUInt8(offset + 16) as keyof typeof battleMode
            ],
        },
      };

    case response.init:
      return {
        type: "Init",
        data: {
          p: buffer.readBigUInt64BE(offset),
          max_supported_version: buffer.readUInt16LE(offset + 8),
        },
      };
    default:
      throw new QueryClientError("Invalid response type", "InvalidResponse");
  }
};

const fetchServerInfo = (address: string, port: number) =>
  new Promise((resolve, reject) => {
    let attempts = 0;
    const socket = dgram.createSocket(address.includes(":") ? "udp6" : "udp4");
    const send = (initData?: InitData) => {
      if (attempts >= MAX_REQUEST_RETRIES) {
        socket.close();
        reject(new Error("Challenge failed after multiple retries"));
      }
      attempts++;

      const rawRequest = {
        p: initData?.p ?? 0n,
        request: initData ? requestType.serverInfo : requestType.init,
      };

      const requestBuffer = serializeRequest(rawRequest);

      socket.send(requestBuffer, port, address, (err) => {
        if (err) {
          socket.close();
          reject(new Error(`Socket send error: ${err.message}`));
        }
      });
    };

    const timeout = setTimeout(() => {
      socket.close();
      reject(new Error("Request timed out"));
    }, 4000);

    socket.on("error", (err) => {
      clearTimeout(timeout);
      socket.close();
      reject(new Error(`Socket error: ${err.message}`));
    });

    socket.on("message", (msg: Buffer) => {
      try {
        if (msg.length <= 2) throw new Error("Response too short");

        const packet = deserializeResponse(msg);

        switch (packet.type) {
          case "Response":
            clearTimeout(timeout);
            socket.close();
            resolve(packet.data);
            break;
          case "Init":
            send(packet.data);
            break;
        }
      } catch (error) {
        clearTimeout(timeout);
        socket.close();
        reject(error);
      }
    });

    send();
  });

const error = (message: string, status: number = 500) =>
  new Response(JSON.stringify({ message }), { status });

const handler = async (request: Request) => {
  const address = process.env.VELOREN_SERVER_HOST;
  const port = process.env.VELOREN_SERVER_PORT;

  if (!address || !port) return error("Address and Port are mandatory");

  try {
    const result = await fetchServerInfo(address, Number(port));
    return new Response(JSON.stringify(result), {
      headers: {
        "Access-Control-Allow-Origin":
          request.headers.get("Origin") === "http://localhost:4321"
            ? "http://localhost:4321"
            : (process.env.URL as string),
        "Access-Control-Allow-Methods": "GET",
        Vary: "Origin",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ message: e }), { status: 500 });
  }
};

export default handler;
