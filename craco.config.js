const {when,whenDev,whenProd,whenTest,ESLINT_MODES,POSTCSS_MODES}=require("@craco/craco");
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');
const webpack=require('webpack');
const path=require('path');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin=require("compression-webpack-plugin");

module.exports={
    reactScriptsVersion:"react-scripts",
    webpack:{
        alias:{//别名
            "@":path.resolve("src"),
        },
        plugins:[
            new CompressionWebpackPlugin({ //打包配置压缩文件
                algorithm:'gzip',
                test:new RegExp(
                    '\\.('+
                    ['js','css'].join('|')+
                    ')$'
                ),
                threshold:1024,
                minRatio:0.8
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/,/moment$/),
            new UglifyJsPlugin({
                uglifyOptions:{
                    compress:{
                        warnings:false,
                        drop_debugger:true,
                        drop_console:true
                    },
                },
                sourceMap:false,
                parallel:true
            }),
            new BundleAnalyzerPlugin(), //查看打包分析明细
        ]
    },
    devServer:(devServerConfig,{env,paths,Proxy,allowedHost})=>{return devServerConfig;},
    optimization:{
        splitChunks:{
            cacheGroups:{
                default:{
                    name:'common',
                    chunks:'',
                    minChunks:2 //模块被引用2次以上的才抽离
                }, 
                vendors:{//第三方库
                    test: /[\\/]node_modules[\\/]/,
                    name:'vendor',
                    chunks:'initial',
                    priority:-10  //决定拆分规则的优先级
                },
                // locallib: {  //拆分指定文件
                //     test: /(src\/locallib\.js)$/,
                //     name: 'locallib',
                //     chunks: 'initial',
                //     priority: -9
                // }
            }
        }
    },
    babel:{
        plugins:[
            ['import',{libraryName:'antd',libraryDirectory:'es',style:'css'}],
            ['@babel/plugin-proposal-decorators',{legacy:true}]
        ],
        
        //加载器配置
        loaders: [
            {
            　　test: /\.jsx$/,
            　　loader: 'babel-loader',
            　　query: {
            　　　　presets: ['react', 'es2015']
            　　}
            }
        ]
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                loaders:["style","css","sass"]
            }
        ]
    }
}