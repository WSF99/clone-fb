/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

nextConfig.images = {
  domains: [
    "links.papareact.com",
    "platform-lookaside.fbsbx.com",
    "firebasestorage.googleapis.com",
    "avatars.githubusercontent.com",
    "cloudflare-ipfs.com",
  ],
};
