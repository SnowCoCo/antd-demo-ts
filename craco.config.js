const CracoLessPlugin = require('craco-less');
const path = require('path');
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');//热加载
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        './src/index.tsx'
    ],
    reactScriptsVersion: "react-scripts",
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
        {
            plugin: reactHotReloadPlugin
        }
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    webpack: {
        // 设置别名
        alias: {
            '@': path.resolve("src"),// 这样配置后 @ 可以指向 src 目录
            'react-dom': '@hot-loader/react-dom',
        },
        plugins:[
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true,
                    },
                },
                sourceMap: false,
                parallel: true,
            }),
        ]
    }
};