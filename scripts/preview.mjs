import { createReadStream, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const port = Number(process.env.APP_PORT || 3101);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

function safeJoin(base, pathname) {
  const decoded = decodeURIComponent(pathname);
  const fullPath = resolve(base, `.${normalize(decoded)}`);
  return fullPath.startsWith(base) ? fullPath : null;
}

function resolveAsset(pathname) {
  if (pathname === "/" || pathname === "/index.html") {
    return join(root, ".next", "server", "app", "index.html");
  }

  if (pathname.startsWith("/_next/static/")) {
    return safeJoin(join(root, ".next", "static"), pathname.replace("/_next/static", ""));
  }

  return safeJoin(join(root, "public"), pathname);
}

const server = createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || `localhost:${port}`}`);
  const filePath = resolveAsset(url.pathname);

  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream"
  });
  createReadStream(filePath).pipe(response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Preview ready at http://localhost:${port}`);
});
