/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/NextJS-Movie-App",
  assetPrefix: "/NextJS-Movie-App",
}

module.exports = nextConfig
