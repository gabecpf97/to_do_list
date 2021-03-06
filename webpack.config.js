const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        toDoItem: './src/js/toDoItem.js',
        toDolist: './src/js/toDoList.js',
        createOnScreen: './src/js/createOnScreen.js',
        newItemControl: './src/js/newItemControl.js',
        createPrompt: './src/js/createPrompt.js',
        editItem: './src/js/editItem.js',
        listControl: './src/js/listControl.js',
        showProjects: './src/js/showProjects.js',
        storeLocally: './src/js/storeLocally.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};