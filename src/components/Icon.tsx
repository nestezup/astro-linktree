import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '../utils/cn'; // We'll create this utility

interface IconProps {
    name: string;
    className?: string;
    size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
    // Capitalize first letter to match component names (e.g. 'github' -> 'Github' is wrong, it's 'Github' usually?)
    // Actually Lucide exports 'Github', 'Twitter', etc. PascalCase.
    // We'll normalize inputs.

    const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    const LucideIcon = (LucideIcons as any)[formattedName] || (LucideIcons as any)[name];

    if (!LucideIcon) {
        console.warn(`Icon "${name}" not found in lucide-react`);
        return null;
    }

    return <LucideIcon className={className} size={size} />;
};
