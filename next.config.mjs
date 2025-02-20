/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mdohyczjlsrblzcugdfa.supabase.co',
        pathname: '/storage/v1/object/public/cabin-images/**',
        port: '',
      },
    ],
  },
};

export default nextConfig;
