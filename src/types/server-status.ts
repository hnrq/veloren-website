export const battleMode = { 1: "pvp", 2: "pve", 3: "per-player" };

export const requestType = { init: 1, serverInfo: 2 };

export const response = { response: 1, init: 2 };

export interface UdpRequest {
  p: bigint;
  request: (typeof requestType)[keyof typeof requestType];
}

export interface ServerInfo {
  players_count: number;
  player_cap: number;
  battlemode: (typeof battleMode)[keyof typeof battleMode];
}

export interface InitData {
  p: bigint;
  max_supported_version: number;
}
