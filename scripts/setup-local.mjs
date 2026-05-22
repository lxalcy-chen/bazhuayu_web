import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const directories = [
  resolve(root, "data"),
  resolve(root, "uploads")
];

for (const directory of directories) {
  mkdirSync(directory, { recursive: true });
}

const envLocal = resolve(root, ".env.local");
const envExample = resolve(root, ".env.example");

if (!existsSync(envLocal)) {
  const fallback = [
    "APP_PORT=3101",
    "NEXT_TELEMETRY_DISABLED=1",
    "DATABASE_URL=\"file:./data/dev.db\"",
    "UPLOAD_DIR=./uploads",
    "CLOUDFLARE_TUNNEL_TOKEN="
  ].join("\n");

  const content = existsSync(envExample) ? readFileSync(envExample, "utf8") : fallback;
  writeFileSync(envLocal, content.endsWith("\n") ? content : `${content}\n`, "utf8");
}
