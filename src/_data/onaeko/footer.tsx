export const BRAND_INFO = {
    name: 'Onaeko',
    initial: 'O',
    initialBgColor: '#F56C23',
    description:
        'We are a research lab dedicated to ensuring that artificial intelligence serves human learning goals and systems.',
};

// Data structure for social media links
export const SOCIAL_LINKS_DATA = [
    {
        id: 'x', // Used for mapping to the imported XIcon component
        href: 'https://www.x.com/onaeko',
        ariaLabel: 'Twitter',
    },
    {
        id: 'linkedin', // Used for mapping to the imported LinkedInIcon component
        href: 'https://www.linkedin.com/company/onaeko',
        ariaLabel: 'LinkedIn',
    },
    {
        id: 'github', // Used for mapping to the imported GitHubIcon component
        href: 'https://github.com/onaeko/',
        ariaLabel: 'GitHub',
    },
] as const;

// Data structure for the main footer link columns
export const FOOTER_LINKS_DATA = [
    {
        title: 'Product',
        links: [
            {
                label: 'Apprenticeship',
                href: '/learn',
                external: true, // Flag for target="_blank" and rel="noopener noreferrer"
            },
            {
                label: 'Hackathons',
                href: '/hackathon',
                external: false,
            },
            {
                label: 'Learn',
                href: '/learn',
                external: false,
            },
            {
                label: 'Pricing',
                href: '/pricing',
                external: false,
            },
        ],
    },
    {
        title: 'Company',
        links: [
            // {
            //     label: 'About us',
            //     href: ' ',
            //     external: false,
            // },
            {
                label: 'Research',
                href: '/research',
                external: false,
            },
            // {
            //     label: 'Roadmap',
            //     href: ' ',
            //     external: false,
            // },
            {
                label: 'Join community',
                href: 'https://chat.whatsapp.com/GnyMgiJL7szJ2s0AZsYDA1?mode=gi_t',
                external: true,
            },
        ],
    },
];

export const FOOTER_BOTTOM_TEXT = {
    madeBy: 'Made with ❤️ from Ogbomoso, Nigeria',
    copyrightName: 'Onaeko Labs Ltd',
    copyrightHref: 'https://onaeko.com',
    rights: '. All rights reserved.',
};
