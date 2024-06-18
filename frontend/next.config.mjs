/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
                port: '3000',
            },
            {
                hostname: 'localhost',
                port: '5000',
            },
            {
                hostname: 'todoapi.ramrachai.com',
            }
        ],
    },
};

export default nextConfig;
