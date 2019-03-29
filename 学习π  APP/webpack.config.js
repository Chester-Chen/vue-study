const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');

// 引入vueLoader
const VueLoaderPlugin = require('vue-loader/lib/plugin')



module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
    ],
    module: { // 配置第三方loader模块
        rules: [{
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']    // 此字段用use或者loader都可
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            // 此处添加exclude， 排除node-modules中的js转换
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            { // 处理字体文件
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'url-loader',
            },
            { // 图片处理
                test: /\.(gif|png|jpeg|jpg|bmp)$/,
                loader: 'url-loader',
            }

        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }

}