import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://firefyd.github.io",
	base: "/Porfolio-Website/",
	outDir: "./dist",
	integrations: [
		svelte(),
		mdx(),
		sitemap(),
		tailwind({
			config: "./tailwind.config.cjs",
		}),
	],
	vite: {
		base: "/Porfolio-Website/",
	},
});
