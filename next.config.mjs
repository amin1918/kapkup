/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.viravira.co",
      },
    ],
  },
};

export default nextConfig;
