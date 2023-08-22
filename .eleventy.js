module.exports = function (eleventyConfig) {
	eleventyConfig.setServerOptions({
		// Whether the live reload snippet is used
		liveReload: true,

		// Whether DOM diffing updates are applied where possible instead of page reloads
		domDiff: true,

		// // Additional files to watch that will trigger server updates
		// // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
		// // Works great with a separate bundler writing files to your output folder.
		// // e.g. `watch: ["_site/**/*.css"]`
		watch: ["public/stylesheets/*.css"],

		// Show local network IP addresses for device testing
		showAllHosts: true,
	});

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
