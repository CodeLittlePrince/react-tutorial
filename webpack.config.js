const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
      historyApiFallback = require('connect-history-api-fallback');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const PRODUCTION = process.env.NODE_ENV === 'production',
      DEVELOPMENT = process.env.NODE_ENV === 'development';

let devtool,                // 设置source-map的类型
    filename,               // 设置js和css生成的名字
    outputPath,             // 指定输出的路径
    pathsToClean,           // 删除指定文件夹的路径
    imageUse;               // 设置使用的图片工具

if (DEVELOPMENT) {
    devtool = 'cheap-module-eval-source-map';
    filename = {
        js: 'js/[name].js',
        css: 'css/[name].css',
    };
    outputPath = path.resolve(__dirname, 'dev');
    pathsToClean = ['dev'];
    imageUse = [
        'url-loader?limit=20000&name=img/[name]-[hash:12].[ext]'
    ];
}else{
    devtool = 'cheap-module-source-map';
    filename = {
        js: 'js/[name]-[chunkhash].js',
        css: 'css/[name]-[chunkhash].css',
    };
    outputPath = path.resolve(__dirname, 'dist');
    pathsToClean = ['dist'];
    imageUse = [
        'url-loader?limit=20000&name=img/[name]-[hash:12].[ext]',
        'image-webpack-loader?{pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
    ];
}

module.exports = {
    devtool: devtool,
	entry: {
        index: './src/js/index.jsx'
    },
    resolve: {
        alias: {
            js: path.resolve(__dirname, 'src/js/'),
            scss: path.resolve(__dirname, 'src/scss/'),
            img: path.resolve(__dirname, 'src/img/')
        }
    },
	output: {
		path: outputPath,
		// publicPath: '/dist/',
        publicPath: '/',
		filename: filename.js
    },
    module: {
        rules: [
        	{
    	        test: /\.scss$/,
    	        use: ExtractTextPlugin.extract({
    	            fallback: 'style-loader',
    	            //resolve-url-loader may be chained before sass-loader if necessary
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        }, 
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
    	        }),
                exclude: '/node_modules/'
    	    },
        	{
        		test: /\.js|jsx$/,
        		use: [
        			'babel-loader'
        		],
        		exclude: '/node_modules/'
        	},
        	{
        		test: /\.(png|svg|jpg|gif)$/,
        		use: imageUse,
        		exclude: '/node_modules/'
        	}
        ]
    },
    plugins: [
    	new CleanWebpackPlugin(pathsToClean),
    	new ExtractTextPlugin({
            filename: filename.css,
            disable: DEVELOPMENT
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/tpl/index.html',
            chunks: ['index'],
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
    	new BrowserSyncPlugin({
    		host: 'localhost',
    		port: 7777,
    		server: {
    			baseDir: ['./dist', './dev'],
                middleware: [ historyApiFallback() ]
    		}
    	}),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}