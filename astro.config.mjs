import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://joshphillips.dev/",
	base: "/",
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
