import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const BASE_URL = process.env.BASE_URL || '/';

export default defineConfig({
  site: 'https://firefyd.github.io',
  base: BASE_URL,
  outDir: './dist',
  build: {
    assetsPrefix: '/',
    assets: 'assets'
  },
  integrations: [
    svelte(),
    mdx(),
    sitemap()
  ],

});