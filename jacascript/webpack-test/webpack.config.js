const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src') + '/';
const outputDir = path.resolve(__dirname, 'dist') + '/';

module.exports = {
    devtool: 'source-map',
    entry: {
        app: [
            srcDir + 'js/main.js',
            srcDir + 'scss/main.scss',
        ],
    },
    output: {
        filename: '[name].js',
        publicPath: '/dist',
        path: outputDir,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};
