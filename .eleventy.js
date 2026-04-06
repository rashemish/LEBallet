module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addFilter("base", function(url) {
        return "/LEBallet" + url;
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "docs"
        }
    };
};
