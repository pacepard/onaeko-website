export type NavigationDropdownItem = {
    title: string;
    href: string;
    description: string;
};

export type NavigationItem = {
    label: string;
    href: string;
    dropdownItems?: NavigationDropdownItem[];
};

export const Navigation = [
    {
        label: 'Products',
        href: '#',
        dropdown: [
            {
                label: 'Onaeko Forge',
                href: '/forge',
            },
            {
                label: 'Onaeko Hack',
                href: '/hack',
            },
            {
                label: 'Our History',
                href: '/about/history',
            },
        ],
    },
    {
        label: 'About us',
        href: '/about',
    },
    {
        label: 'FAQ',
        href: '/faq',
    },
    {
        label: 'Contact',
        href: '/contact',
    },
];

export const NavigationItems: NavigationItem[] = [
    { label: 'AI Education', href: '/programs' },
    { label: 'Courses', href: '/courses' },
    // {
    //     label: 'Solutions',
    //     href: '#features',
    //     dropdownItems: [
    //         {
    //             title: 'Onaeko Collective',
    //             href: '/collective',
    //             description:
    //                 'The hands-on platform for achieving the mastery of a Superhuman',
    //         },
    //         {
    //             title: 'Onaeko Go',
    //             href: '/go',
    //             description:
    //                 'Organize Innovation. The hackathon management stack for hosting world-class hackathons',
    //         },
    //     ],
    // },
    { label: 'Learn', href: '/learn' },
    { label: 'Hackathon', href: '/hackathon' },

    { label: 'Research', href: '/research' },
    { label: 'Pricing', href: '/pricing' },
    // { label: 'FAQ', href: '/faq' },
    // { label: '', href: '/open-source' },
    // {
    //     label: 'Open Source',
    //     href: '',
    //     dropdownItems: [
    //         {
    //             title: 'Projects',
    //             href: '/collective',
    //             description:
    //                 'The hands-on platform for achieving the mastery of a Superhuman',
    //         },
    //         {
    //             title: 'Personal Projects',
    //             href: '/go',
    //             description:
    //                 'Organize Innovation. The hackathon management stack for hosting world-class hackathons',
    //         },
    //     ],
    // },

    // { label: "About us", href: "/about" },
    // { label: 'Contact', href: '/contact' },
];

// the best way to be a superhuman talent
// The hands-on platform for achieving the mastery of a Superhuman.
// Build the foundational skills that start the journey to becoming a Onaeko Superhuman.
// Onaeko Hack: Organize Innovation. The hackathon management stack for hosting world-class hackathons.
// Onaeko Superhumans
// Onaeko Forge
// Onaeko Mavens
// unlocking the superhuman potentails for ll builders

//Become a (Onaeko) Superhuman
// We are here to help you learn and grow by doing without any limits.
// AI moves fast, We don't want you to be behind.We give you the tools, you do the building!
// Collaborate with software engineers, product managers,product designers, data folks, and other lifelong learners.
// Build Open Source Softwares and AI/ML Products
// Get started by contributing to lens.
// => Start Contributing
//=> Read our docs
