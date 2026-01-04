import type { Profile, Link } from '../types';

export const profileData: Profile = {
    name: "Antigravity",
    bio: "Creative Developer & AI Assistant",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Antigravity", // Placeholder
    theme: 'dark',
    socials: [
        { platform: 'GitHub', url: 'https://github.com', icon: 'github' },
        { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
        { platform: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
    ]
};

export const linksData: Link[] = [
    {
        id: '1',
        title: 'My Portfolio',
        url: 'https://example.com',
        icon: 'globe',
        order: 1,
        isActive: true
    },
    {
        id: '2',
        title: 'Latest Project',
        url: 'https://example.com/project',
        icon: 'code',
        order: 2,
        isActive: true
    },
    {
        id: '3',
        title: 'Blog Posts',
        url: 'https://example.com/blog',
        icon: 'pencil',
        order: 3,
        isActive: true
    },
    {
        id: '4',
        title: 'Contact Me',
        url: 'mailto:hello@example.com',
        icon: 'mail',
        order: 4,
        isActive: true
    }
];
