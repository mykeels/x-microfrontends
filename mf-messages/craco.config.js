const overrideWebpackConfig = require("./config-overrides");

const config = {
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
        webpackConfig.optimization.minimize = true;
        webpackConfig.optimization.mergeDuplicateChunks = true;
        webpackConfig.optimization.chunkIds = "named";
        webpackConfig.optimization.flagIncludedChunks = true;
        webpackConfig.optimization.concatenateModules = true;
      }
      return overrideWebpackConfig(webpackConfig, env);
    }
  },
  plugins: [],
  typescript: {
    enableTypeChecking: true
  }
}

module.exports = config;
