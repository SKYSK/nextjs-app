/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
     images: {
       unoptimized: true,
     },
     basePath: '/nextjs-app',
   }
