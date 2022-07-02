module.exports = {
  publicPath: "/bk24", //enter the name of the git repo here
  outputDir: "./docs",
  pwa: {
    //workboxPluginMode: "InjectManifest",
    //workboxOptions: {
    //swSrc: "src/service-worker.js",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    iconPaths: {
      msTileImage: "img/icons/mstile-150x150.png",
    },
  },
};
