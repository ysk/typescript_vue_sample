module.exports = {
    pages: {
        index: {
            entry: "src/main.js",
            title: "Tech Note",
        }
    },
    devServer: {
        port: 8081,
        disableHostCheck: true,
        host: 'localhost'
    }
};
