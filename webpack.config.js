// WEBPACK CONFIG 

const webpack = require('webpack');
const path = require('path');
const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './src/main.js',
        './src/main.scss'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }, 
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    use: [
                        'css-loader', 
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new extractTextPlugin('style.css')
    ]
}