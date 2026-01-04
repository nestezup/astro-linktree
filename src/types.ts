export interface Link {
    id: string;
    title: string;
    url: string;
    icon?: string; // Icon name from Lucide
    order: number;
    isActive: boolean;
}

export interface Profile {
    name: string;
    bio: string;
    avatarUrl: string;
    socials: SocialLink[];
    theme: 'dark' | 'light' | 'custom'; // For future use
}

export interface SocialLink {
    platform: string; // 'github', 'twitter', 'instagram', etc.
    url: string;
    icon: string; // Icon name
}
