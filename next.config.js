/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1110677321,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "cf2ee3f714ed29f403f75cc2129b204d",
  },
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
