const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            { test: /\.css$/, use: ['style-loader', 'css-loader']},
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, 
            { test: /\.vue$/, use: 'vue-loader'},
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
        ]
    },
     resolve:{
         alias:{
             //'vue$':'vue/dist/vue.js'
         }
     }
}