import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "八爪鱼 AI Agent | 电商老板的经营副手",
  description: "八爪鱼 AI 自动连接店铺、财务、投流、库存数据，帮电商老板算清利润、预警风险、生成经营建议。"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
