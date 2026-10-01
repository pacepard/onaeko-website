import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import { useFont } from '@/_data/fonts';
import { siteConfig } from '@/_data/site-config';
import { Navbar } from '@/components/shared/containers/nav-bar';
import { InitialLoadGate } from '@/components/shared/initial-load-gate';
import Footer from '@/components/shared/sections/footer';

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.getStartedUrl),
    keywords: [
        'Onaeko',
        'Hackathon',
        'Product Designer',
        'Youtube',
        'Product Management',
        'Software Engineering',
        'Data Science',
        'Open Source Contribution',
    ],
    authors: [
        {
            name: siteConfig.title,
            url: siteConfig.url,
        },
    ],
    creator: siteConfig.title,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.getStartedUrl,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: `${siteConfig.url}/blocks/og-image.png`,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: siteConfig.links.creator,
    },
    icons: {
        icon: [
            {
                url: '/blocks/onaeko-icon.png',
                type: 'image/png',
                sizes: 'any',
            },
            {
                url: '/blocks/onaeko-icon.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                url: '/blocks/onaeko-icon.png',
                sizes: '16x16',
                type: 'image/png',
            },
        ],
        shortcut: '/blocks/onaeko-icon.png',
        apple: [
            {
                url: '/blocks/onaeko-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
    },
    manifest: '/manifest.json',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: siteConfig.title,
    },
    other: {
        'msapplication-TileColor': '#F56C23',
        'msapplication-TileImage': '/blocks/onaeko-icon.png',
        'msapplication-config': '/browserconfig.xml',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${useFont.variable} antialiased overflow-x-hidden`}
            >
                <InitialLoadGate>
                    {/* <OnaekoHeader /> */}
                    <Navbar />

                    {children}

                    {/* <PPFunnel /> */}
                    <Footer />
                </InitialLoadGate>

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
