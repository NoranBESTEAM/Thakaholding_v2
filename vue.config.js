const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  // https://stackoverflow.com/questions/41392166/vue-js-build-not-working-with-npm-run-build
  // https://www.youtube.com/watch?v=Qrf-WcrzkdQ
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/variables/_globalVars.scss";
          @import "@/assets/scss/helpers/_mixins.scss";
        `,
      },
    },
  },
};
