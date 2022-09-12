/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/NextJS-Movie-App",
  assetPrefix: "/NextJS-Movie-App",
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
}

module.exports = nextConfig
