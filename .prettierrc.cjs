module.exports = {
	singleQuote: false,

	trailingComma: "es5",

	useTabs: true,

	printWidth: 100,

	endOfLine: "lf",

	plugins: [
		"prettier-plugin-astro",
		"prettier-plugin-svelte",
		"@ianvs/prettier-plugin-sort-imports",
	],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: "*.svelte",
			options: {
				parser: "svelte",
			},
		},
	],
};
