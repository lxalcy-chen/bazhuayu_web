# 八爪鱼 AI Agent NAS Docker 部署说明

## 部署目录结构

```text
bazuayu-ai-agent/
├─ app/
├─ Dockerfile
├─ docker-compose.yml
├─ .dockerignore
├─ .env
├─ .env.example
├─ next.config.ts
├─ package.json
├─ package-lock.json
├─ postcss.config.mjs
└─ tsconfig.json
```

## 本地开发

```bash
npm install
npm run dev
```

开发模式默认使用 Next.js 本地服务。生产 Docker 部署不会影响本地开发体验。

## NAS / 飞牛OS Docker 部署

把整个项目目录上传到 NAS，例如：

```text
/vol1/1000/docker/bazuayu-ai-agent
```

进入目录后执行：

```bash
docker compose up -d --build
```

访问：

```text
http://NAS局域网IP:3101
```

停止服务：

```bash
docker compose down
```

查看日志：

```bash
docker compose logs -f bazuayu-web
```

更新代码后重新构建：

```bash
docker compose up -d --build
```

## Cloudflare Tunnel 公网访问

1. 在 Cloudflare Zero Trust 创建 Tunnel。
2. 复制 Tunnel token。
3. 填入 `.env`：

```env
CLOUDFLARE_TUNNEL_TOKEN=你的_Tunnel_Token
```

4. 启动网站和 Tunnel：

```bash
docker compose --profile tunnel up -d --build
```

Cloudflare Public Hostname 的服务地址填写：

```text
http://bazuayu-web:3101
```

只启动内网网站、不启动公网 Tunnel：

```bash
docker compose up -d --build
```

## 端口与环境变量

默认对外暴露端口为 `3101`。如需改 NAS 映射端口，修改 `.env`：

```env
APP_PORT=3101
```

容器内部端口固定为 `3101`，方便 Cloudflare Tunnel 和 Docker 网络访问。

## 生产模式

Dockerfile 会自动执行：

```bash
npm ci
npm run build
```

最终容器使用 Next.js standalone 输出，通过：

```bash
node server.js
```

以生产模式运行。
