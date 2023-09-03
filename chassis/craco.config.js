const overrideWebpackConfig = require("./config-overrides");

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  style: {
    css: {
      loaderOptions: cssLoaderOptions => {
        cssLoaderOptions.url = false;
        return cssLoaderOptions;
      }
    }
  },
  webpack: {
    configure: (webpackConfig, { env }) => {
      if (process.env.WEBPACK_NODE_ENV !== "production") {
        webpackConfig.optimization.minimize = false;
        webpackConfig.optimization.mergeDuplicateChunks = true;
        webpackConfig.optimization.chunkIds = "named";
        webpackConfig.optimization.flagIncludedChunks = true;
        webpackConfig.optimization.concatenateModules = true;
      }
      return overrideWebpackConfig(webpackConfig, env);
    }
  },
  plugins: []
};
