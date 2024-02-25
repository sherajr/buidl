// next.config.mjs

// Define your Next.js configuration object using ESM syntax
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        // Note: port and pathname are optional, you can omit them if not needed
        pathname: '/Peace-Antz/**',
      },
    ],
  },
};

// Export your configuration object
export default nextConfig;
