/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      // NEO SPARK Admin Panel storage
      { protocol: 'https', hostname: 'neoadmin-ivhumdtn.manus.space' },
    ],
  },
  experimental: { optimizePackageImports: ['lucide-react'] },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID,
    // NEO SPARK Admin Panel API
    NEXT_PUBLIC_ADMIN_API_URL: process.env.NEXT_PUBLIC_ADMIN_API_URL,
    ADMIN_API_KEY: process.env.ADMIN_API_KEY,
    REVALIDATE_SECRET: process.env.REVALIDATE_SECRET,
  },
};
export default nextConfig;
