/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eatradingacademy.com',
        port: '',
        pathname: '/wp-content/uploads/**',
        search: ''
      }
    ]
  }
}

export default nextConfig
