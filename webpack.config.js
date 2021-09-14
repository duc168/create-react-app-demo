const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    mode: "development",
    devServer: {
        port: 3333,
        open: true,
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
                type: "asset",
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
            template: './public/index.html'
        })
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
    },
}