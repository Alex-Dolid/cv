module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(woff|woff2|eot|ttf)$/i,
                    loader: "file-loader",
                    options: {
                        outputPath: "assets/fonts",
                        name: "[name].[ext]",
                        limit: 10000
                    }
                }
            ]
        }
    };
};
