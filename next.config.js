/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 

const debug = process.env.NODE_ENV !== 'production'
const name = 'app_nextjs_typescript'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
  basePath: `/app_nextjs_typescript`,
}
