const path = require('path');

module.exports = {
    entry: {
        app: './src/app.jsx'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
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
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}