/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'klrikfzixuzidskulbzd.supabase.co',
                port: ''
            }
        ]
    }
};

export default nextConfig;
