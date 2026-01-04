// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import react from '@astrojs/react';
import remarkWikiLink from 'remark-wiki-link';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkAlert } from 'remark-github-blockquote-alert';

// https://astro.build/config
export default defineConfig({
    image: {
        service: { entrypoint: 'astro/assets/services/sharp' },
    },

    vite: {
        plugins: [tailwindcss()]
    },

    markdown: {
        remarkPlugins: [
            [remarkWikiLink, {
                hrefTemplate: (permalink) => `/wiki/${permalink}`,
                aliasDivider: '|'
            }],
            remarkMath,
            remarkAlert,
        ],
        rehypePlugins: [rehypeKatex],
    },

    adapter: node({
        mode: 'standalone'
    }),

    integrations: [react()],

    server: {
        port: 14321,
        host: true
    }
});