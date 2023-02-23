const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    Object.assign(config.experiments, { topLevelAwait: true });

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
            "./nav": "./components/Nav",
            "./home": "./pages/index",
            "./pages-map": "./pages-map.js",
          },
          shared: {},
        })
      );
    }

    return config;
  },
};
