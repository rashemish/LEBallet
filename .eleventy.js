module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy({ "src/assets/favicon.ico": "/" });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    };
};
