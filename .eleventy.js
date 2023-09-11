module.exports = function (eleventyConfig) {
	eleventyConfig.addWatchTarget("./src/_includes/scss");

	eleventyConfig.addPassthroughCopy({ "./src/_includes/scss/style.css": "style.css" });
	eleventyConfig.addPassthroughCopy("src/_assets");
	eleventyConfig.addPassthroughCopy("src/.htaccess");
	eleventyConfig.addPassthroughCopy("src/*.js");

	return {
		dir: {
			input: "src",
			output: "public",
			includes: "_includes/njk",
		},
		htmlTemplateEngine: "njk",
	};
};
