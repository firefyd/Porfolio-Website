import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const BASE_URL = 'Porfolio-Website';

export default defineConfig({
  site: 'https://firefyd.github.io',
  base: `/Porfolio-Website/`,
  outDir: './dist',
  build: {
    assetsPrefix: '/',
    assets: 'assets'
  },
  integrations: [
    svelte(),
    mdx(),
    sitemap(),
    tailwind({

      config: './tailwind.config.cjs', 
    })
  ],

});