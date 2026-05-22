import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const port = Number(process.argv[2] || process.env.APP_PORT || 3101);

if (!Number.isInteger(port) || port <= 0) {
  throw new Error(`Invalid port: ${process.argv[2]}`);
}

async function getWindowsPids() {
  const { stdout } = await execFileAsync("powershell.exe", [
    "-NoProfile",
    "-Command",
    `(Get-NetTCPConnection -LocalPort ${port} -State Listen -ErrorAction SilentlyContinue).OwningProcess | Sort-Object -Unique`
  ]);

  return stdout
    .split(/\r?\n/)
    .map((line) => Number(line.trim()))
    .filter((pid) => Number.isInteger(pid) && pid > 0 && pid !== process.pid);
}

async function stopWindowsPid(pid) {
  await execFileAsync("powershell.exe", [
    "-NoProfile",
    "-Command",
    `Stop-Process -Id ${pid} -Force -ErrorAction SilentlyContinue`
  ]);
}

async function getUnixPids() {
  try {
    const { stdout } = await execFileAsync("lsof", ["-ti", `tcp:${port}`]);
    return stdout
      .split(/\r?\n/)
      .map((line) => Number(line.trim()))
      .filter((pid) => Number.isInteger(pid) && pid > 0 && pid !== process.pid);
  } catch {
    return [];
  }
}

async function stopUnixPid(pid) {
  await execFileAsync("kill", ["-9", String(pid)]);
}

const isWindows = process.platform === "win32";
const pids = isWindows ? await getWindowsPids() : await getUnixPids();

for (const pid of pids) {
  await (isWindows ? stopWindowsPid(pid) : stopUnixPid(pid));
}

if (pids.length > 0) {
  console.log(`Freed port ${port}: stopped ${pids.join(", ")}`);
}
