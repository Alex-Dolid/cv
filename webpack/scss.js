const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const path = require("path");
const paths = require("./paths");

module.exports = function(path) {
    return {
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    include: path,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                reloadAll: true,
                                publicPath: "../"
                            }
                        },
                        {
                            loader: "css-loader",
                            options: { url: true }
                        },
                        {
                            loader: "resolve-url-loader",
                            options: {
                                root: paths.src + "/assets"
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-resources-loader",
                            options: {
                                resources: paths.src + "/styles/style-guide/_variables.scss"
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    autoprefixer({
                                    })
                                ],
                                sourceMap: false
                            }
                        }
                    ]
                }
            ]
        }
    };
};
