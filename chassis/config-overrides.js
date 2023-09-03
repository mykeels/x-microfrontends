/* config-overrides.js */
const path = require("path");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

const deps = require("./package.json").dependencies;

// eslint-disable-next-line
module.exports = function override(config, env) {
  config.output.publicPath = "auto";

  config.target = "web";
  const isMicrofrontendsEnabled =
    process.env.REACT_APP_USE_MICROFRONTENDS === "true";
  if (isMicrofrontendsEnabled) {
    config.entry = ["./src/index.js"];
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "chassis",
        filename: "remoteEntry.js",
        exposes: {
          "./index.js": "./src/bootstrap.js"
        },
        shared: {
          react: {
            requiredVersion: deps["react"],
            import: "react",
            shareKey: "react",
            shareScope: "default",
            singleton: true
          },
          "react-dom": {
            requiredVersion: deps["react-dom"],
            singleton: true
          },
          "react-query": {
            requiredVersion: deps["react-query"],
            singleton: true
          }
        }
      })
    );
  } else {
    config.entry = ["./src/bootstrap.js"];
  }

  config.resolve = {
    fallback: {
      https: false,
      http: false,
      zlib: false,
      fs: false,
      path: false
    }
  };
  return config;
};
