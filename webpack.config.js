const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const paths = require("./webpack/paths");
const merge = require("webpack-merge");
const pug = require("./webpack/pug");
const devServer = require("./webpack/devServer");
const scss = require("./webpack/scss");
const js = require("./webpack/js");
const img = require("./webpack/img");
const fonts = require("./webpack/fonts");

// Add page names here
let {pagesNames} = require("./src/init/pages");

// function for generate pug - pages
function pagesPlugins(production) {
  return pagesNames.map(
    pageName =>
      new HtmlWebpackPlugin({
        filename: `${production ? pageName + "/" : ""}${pageName}.html`,
        chunks: ["commons", pageName, "styles"],
        inject: true,
        template: paths.src + `/pages/${pageName}/${pageName}.pug`
      })
  );
}

function entries(pagesNames) {
  const store = {};
  pagesNames.forEach(item => store[item] = paths.src + `/pages/${item}/${item}.js`);
  return store;
}

const common = merge([
  {
    optimization: {
      minimize: true,
      runtimeChunk: {name: "commons"},
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.s?css$/,
            chunks: "all",
            enforce: true,
            minChunks: 1,
            reuseExistingChunk: true
          },
          commons: {
            test: /\.jsx?$/,
            chunks: "all",
            minChunks: 2,
            name: "commons",
            enforce: true
          }
        }
      }
    },
    devtool: "eval-cheap-module-source-map",
    output: {
      path: paths.build
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style/[name].css",
        ignoreOrder: true
      }),
      {
        apply(compiler) {
          compiler.hooks.shouldEmit.tap(
            "Remove styles from output",
            compilation => {
              delete compilation.assets["styles/styles.js"];
              return true;
            }
          );
        }
      }
    ],
    resolve: {
      extensions: [".js", ".pug", ".scss", ".css"],
      alias: {
        components: paths.src + "/components",
        assets: path.resolve( __dirname, 'src/assets' ),
        styles: paths.src + "/styles",
        src: paths.src,
      },
    }
  },
  img(),
  fonts(),
  pug(),
  scss(),
  js(),
]);

module.exports = (env, options) => {
  let production = options.mode === "production";

  pagesNames = production
    ? pagesNames.filter(item => item !== "index")
    : pagesNames;

  common.plugins = common.plugins.concat(pagesPlugins(production));

  common.output.filename = "[name].js";
  common.entry = entries(pagesNames);

  return production ? merge([common]) : merge([common, devServer]);
};
