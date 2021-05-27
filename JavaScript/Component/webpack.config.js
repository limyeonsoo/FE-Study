const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        main: './src/app.js',
    },
    devServer:{
        contentBase: './dest',
        hot: true,
    },
    output:{
        path: path.resolve('./dest'),
        filename: '[name].js',
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.png$/,
                use: ['file-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new CopyPlugin({
        //     patterns: [
        //       { from: "public", to: "img" },
        //     ],
        //   }),
    ]
}