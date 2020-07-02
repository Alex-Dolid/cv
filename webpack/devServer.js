module.exports = function() {
    return {
        devServer: {
            overlay: true,
            compress: true,
            open: true,
            port: 8080
        }
    };
};
