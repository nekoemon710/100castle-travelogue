/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // 静的出力（out/）
  trailingSlash: true,          // Xserver で相対パス安定
  images: { unoptimized: true } // next/image を静的で使うため
}
export default nextConfig
