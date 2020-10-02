module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
          ie: "11",
        },
      },
    ],
    ["@babel/preset-react"],
  ];
  const plugins = [
    ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
    ["@babel/plugin-transform-runtime"],
    ["@babel/plugin-proposal-class-properties"],
    ["babel-plugin-styled-components"],
  ];
  return {
    presets,
    plugins,
  };
};
