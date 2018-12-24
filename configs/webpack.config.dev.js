/**
 * For Local Development
 * @type {webpack}
 */
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const webpackConfigDev = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../src/'),
        filename: 'bundle.js',
        publicPath: '/js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader",
                'css-loader',
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.ejs',
            filename: 'index.html',
            inject: false,
            alwaysWriteToDisk: true,
            staticResources: {
                js: '/js/bundle.js'
            }
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 3000,
        contentBase: path.resolve(__dirname, '../src'),
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        historyApiFallback: {
            rewrites: [
                { from: /.*/g, to: '/index.html' }
            ]
        }
    },

    devtool: '#eval-source-map'
};

module.exports = merge(require('./webpack.config.common'), webpackConfigDev);