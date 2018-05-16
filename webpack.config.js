const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const browserConfig = {
    entry: ['babel-polyfill', './src/client/index.js'],
    resolve: { extensions: ['.js', '.jsx'] },
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new ExtractTextPlugin({filename: "public/style.css"})
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})) },
            { test: /\.scss$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})) },
            { test: /\.jsx?$/, loader:  ['react-hot-loader/webpack', 'babel-loader'], exclude: [/node_modules/, /public/] },
        ]
    },
    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' }
    }
};

const serverConfig = {
    entry: ['babel-polyfill', './src/server/index.js'],
    target: "node",
    resolve: { extensions: ['.js', '.jsx'] },
    output: {
        path: __dirname,
        filename: "server.js",
        libraryTarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    plugins: [
        new ExtractTextPlugin({filename: "public/style.css"})
    ],
    module: {
        rules: [
            {test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/], loader: "file-loader", options: {name: "public/media/[name].[ext]", publicPath: url => url.replace(/public/, ""), emit: false}},
            { test: /\.css$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})) },
            { test: /\.scss$/, use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})) },
            { test: /\.jsx?$/, loader: process.env.NODE_ENV !== 'production' ? ['react-hot-loader/webpack', 'babel-loader'] : 'babel-loader', exclude: [/node_modules/, /public/] },
        ]
    },
    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
};

module.exports = [browserConfig, serverConfig];
