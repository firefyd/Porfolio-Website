import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://firefyd.github.io',
  base: '/Portfolio-Website',
  integrations: [
    svelte(),
    mdx(),
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});