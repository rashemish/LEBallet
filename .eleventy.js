module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    };
};
