module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: [
                                "@babel/plugin-proposal-class-properties",

                                [
                                    "@babel/plugin-transform-runtime",
                                    {
                                        regenerator: true
                                    }
                                ]
                            ]
                        }
                    }
                }
            ]
        }
    };
};
