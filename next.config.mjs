/** @type {import('next').NextConfig} */
// GitHub project Pages URL: https://USER.github.io/REPO/ — set when building for deploy:
//   NEXT_PUBLIC_BASE_PATH=/your-repo-name
// Omit or leave empty for localhost and for user sites (USER.github.io with no subpath).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  ...(basePath
    ? { basePath, assetPrefix: basePath.endsWith("/") ? basePath : `${basePath}/` }
    : {})
};

export default nextConfig;

