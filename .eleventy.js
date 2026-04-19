module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("/styles.css");
    eleventyConfig.addPassthroughCopy("/assets");
    eleventyConfig.addWatchTarget("src");

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        }
    };
};
