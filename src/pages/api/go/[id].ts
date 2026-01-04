import type { APIRoute } from 'astro';
import { linksData } from '../../../data/mock';

export const prerender = false;

export const GET: APIRoute = async ({ params, redirect }) => {
    const { id } = params;

    // Find the link in our mock data
    const link = linksData.find((l) => l.id === id);

    if (!link) {
        return new Response('Link not found', { status: 404 });
    }

    // --- ANALYTICS LOGIC START ---
    // In a real app, this is where you'd call PocketBase or DB
    // await pocketbase.collection('clicks').create({ link: id, user_agent: ... });
    console.log(`[Analytics] Click recorded for Link ID: ${id} (${link.title}) - Target: ${link.url}`);
    // --- ANALYTICS LOGIC END ---

    return redirect(link.url, 302);
};
