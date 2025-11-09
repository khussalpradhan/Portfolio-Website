/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  output: 'export',
  images: {
    // Use the custom loader in production; in development disable optimization to avoid
    // rewrites and loader-width warnings while serving /public/ directly.
    loader: 'custom',
    loaderFile: './loader.js',
    unoptimized: isDev,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
