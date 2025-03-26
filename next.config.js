/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/homepage',  // GitHub Pagesのリポジトリ名に合わせて '/homepage' に設定
  assetPrefix: '/homepage',  // 静的ファイルのパスを調整
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;