import fs from "fs";

fs.writeFileSync(
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
  process.env.GOOGLE_CLOUD_SERVICE_CONTENT,
  "utf8",
);
console.log(
  `Credentials saved to ${process.env.GOOGLE_APPLICATION_CREDENTIALS}`,
);
