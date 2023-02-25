const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "home",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            home: "home@http://localhost:3000/_next/static/chunks/remoteEntry.js",
            about:
              "about@http://localhost:3001/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            "./home": "./pages/index",
            "./nav": "./components/Nav",
            "./break": "./components/common/Break",
            "./sub-title": "./components/common/SubTitle",
            "./pages-map": "./pages-map.js",
          },
          shared: {},
        })
      );
    }

    return config;
  },
};
