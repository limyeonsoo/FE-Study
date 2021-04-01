const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    mode : "development",
    entry : {
        main : './index.js'
    },
    output: {
        path : path.resolve('./dist'),
        filename : 'TODO.js'
    },
    watch : true,
    devServer : {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open : true,
        host : "localhost",
        port : 3000,
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}