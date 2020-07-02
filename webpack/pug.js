const paths = require("./paths");

module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: "pug-loader",
                    options: {
                        root: paths.src + "/components",
                        globals: true,
                        pretty: true
                    }
                }
            ]
        }
    };
};
