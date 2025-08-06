import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',             // ← 静的出力
  trailingSlash: true,          // ← Xserverで相対パス安定
  images: { unoptimized: true } // ← next/image を静的で使うため
}
export default nextConfig
