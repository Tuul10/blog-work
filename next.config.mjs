/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media2.dev.to", "example.com", "another-domain.com"],
  },
};

export default nextConfig;
