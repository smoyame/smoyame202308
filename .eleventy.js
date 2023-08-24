module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./src/_includes/scss/style.scss");

	eleventyConfig.setServerOptions({
		liveReload: true,
		domDiff: true,
		watch: ["src/_includes/scss/style.scss"],
		showAllHosts: true,
	});

	eleventyConfig.addPassthroughCopy({ "./src/_includes/scss/style.css": "./style.css" });
	eleventyConfig.addPassthroughCopy("./src/_assets");
	eleventyConfig.addPassthroughCopy("./src/.htaccess");

	return {
		dir: {
			input: "src",
			output: "public",
			includes: "_includes/njk",
		},
		htmlTemplateEngine: "njk",
	};
};
