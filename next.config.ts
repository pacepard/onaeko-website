/** next.config.ts */
import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const mdx = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Vercel serves Next natively. Keep `output: 'standalone'` only when
    // deploying with Docker/Coolify later (see Dockerfile).
    transpilePackages: ['@onaeko/ui'],
    images: { unoptimized: true },
    experimental: {
        mdxRs: false,
    },
};

export default mdx(nextConfig);
