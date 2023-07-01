/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['avatars.githubusercontent.com'], // add your own domain here if needed for image loading
    }
}

module.exports = nextConfig
