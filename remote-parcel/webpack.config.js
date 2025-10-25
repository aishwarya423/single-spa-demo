const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "poc-org",
    projectName: "proj-parcel",
    webpackConfigEnv,
    argv,
    outputSystemJS: false,
  });

  return merge(defaultConfig, {
    output:{
      filename:"poc-org-proj-parcel.js",
      publicPath:"http:localhost:8001/",
      libraryTarget:"module"
    },
    experiments:{
      outputModule:true,//required for esm build
    }
    // modify the webpack config however you'd like to by adding to this object
  });
};
