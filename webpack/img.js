module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
                    loader: "file-loader",
                    options: {
                        outputPath: "assets/images",
                        limit: 50
                    }
                }
            ]
        }
    };
};