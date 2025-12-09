/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/atelier/',      // ★ 너의 GitHub Repository 이름
  assetPrefix: '/atelier/',  // ★ 반드시 동일하게
};

export default nextConfig;
