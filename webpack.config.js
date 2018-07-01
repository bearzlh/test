const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const HtmlWebpackPluginConfig = {
    title: 'hello,world', // html5�ļ���<title>����
    filename: 'index.html', // Ĭ����index.html�������������õ���ҳ��index.html���������ĳ��������֣���ôdevServer.index��Ϊ����һ��
}


module.exports = {
    mode: "development",
    context: path.resolve(__dirname, './src'), //D:\03www2018\study\webpack2017\build\src
    entry: './main.js', //main.js�е�js����ʡ�ԣ�ǰ���./����ʡ
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './main.js',
    },
    module: {
        rules: [{
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                }]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(HtmlWebpackPluginConfig),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        open: true,
        index: 'index.html',
        inline: true,
        hot: false,
        compress: true
    }
}
