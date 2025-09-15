const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        clean: false,
    },
    mode: 'development',
    devServer: {
        static: './public',
        hot: true,
        open: true,
        port: 3000,
        watchFiles: ['src/**/*', 'public/**/*', 'bower_components/**/*'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    watch: true,
};