const CracoLessPlugin = require('craco-less');
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    entry:[
        './src/index.tsx'
    ],
    reactScriptsVersion:"react-scripts",
    babel: {   //用来支持装饰器
        plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
            lessLoaderOptions: {
                lessOptions: {
                modifyVars: { '@primary-color': '#1DA57A' },
                javascriptEnabled: true,
                },
            },
            },
        },
        // new UglifyJsPlugin({
        //     uglifyOptions:{
        //         compress:{
        //             warnings:false,
        //             drop_debugger:true,
        //             drop_console:true
        //         },
        //     },
        //     sourceMap:false,
        //     parallel:true
        // }),
    ],
    module:{
        rules:[
            {
                test:/\.scss$/,
                loaders:['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        // 设置别名
        alias: {
            '@': resolve('src')// 这样配置后 @ 可以指向 src 目录
        }
    }
};