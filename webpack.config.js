const webpack = require('webpack');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: ['./src/client/index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: `${__dirname}/public`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
}