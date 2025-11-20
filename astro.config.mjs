import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const BASE_URL = process.env.BASE_URL || '/';

export default defineConfig({
  site: 'https://firefyd.github.io',
  base: '/Porfolio-Website/',
  outDir: './dist',
  integrations: [
    svelte(),
    mdx(),
    sitemap(),
    tailwind({

      config: './tailwind.config.cjs', 
    })
  ],

});