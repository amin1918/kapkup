/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.viravira.co",
      },
      {
        protocol: "http",
        hostname: "api.kapkup.com",
      },
    ],
  },
};

export default nextConfig;
