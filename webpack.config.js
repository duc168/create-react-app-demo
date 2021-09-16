const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
const Dotenv = require('dotenv-webpack');
const DefinePlugin = require('webpack').DefinePlugin

module.exports = env => {
    const getBasePath = () => {
        if (env.dev === true) {
            return `/`
        }
        if (env.stag === true) {
            return `/create-react-app-demo`
        }
        if (env.prod === true) {            
            return `/create-react-app-demo`
        }
        return '/'
    }
    const getEnvFile = () => {
        const prefix = `env`
        if (env.dev === true) {
            return `${prefix}.development`
        }
        if (env.stag === true) {
           
            return `${prefix}.staging`
        }
        if (env.prod === true) {
            return `${prefix}.production`
        }
        return 'default'
    }
    const $envFile = getEnvFile()
    const currentPublicPath = getBasePath()
    return {
        mode: "development",
        devServer: {
            port: 3333,
            open: true,
            historyApiFallback: true,
        },
        entry: './src/index.tsx',
        module: {
            rules: [
                {
                    test: /\.js$|jsx/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.ts$|tsx/,
                    exclude: /node_modules/,
                    use: ["ts-loader"]
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.s[ca]ss$/i,
                    exclude: /\.module\.s[ca]ss$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.module\.s[ca]ss$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.svg$/,
                    use: ['@svgr/webpack', 'url-loader'],
                },
                {
                    test: /\.(eot|ttf|woff|woff2|png|jpg|gif)$/i,
                    // type: "asset/resource",
                    use: ['url-loader']
                },

            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                "@": path.resolve('./src')
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html',
                favicon: './public/favicon.ico'
            }),
            new DefinePlugin({
                'process.env.BASE_PATH': JSON.stringify(currentPublicPath)
              }),
            new Dotenv({
                path: `./config/${$envFile}`
            }),
        ],
        optimization: {
            minimize: true,
            chunkIds: 'deterministic',
            moduleIds: 'deterministic',
            realContentHash: false,
            runtimeChunk: 'multiple',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true,
            publicPath: currentPublicPath
        },
    }
}
