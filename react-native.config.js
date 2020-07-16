const blacklist = require("metro-config/src/defaults/blacklist");

module.exports = {
  assets: ["react-native-vector-icons"],
  dependencies: {},
  resolver: {
    blacklistRE: blacklist([/node_modules\/.*\/node_modules\/react-native\/.*/]),
  },
};
