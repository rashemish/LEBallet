module.exports = function (eleventyConfig) {
   // Copy `_src/img/` to `_site/img`
   eleventyConfig.addPassthroughCopy("src/img");
   eleventyConfig.addPassthroughCopy("src/style.css");
   eleventyConfig.addPassthroughCopy({ "src/img/favicon.ico": "/" });


 return {
   dir: {
     input: "src",
     output: '_site'


  },


};
  


};
