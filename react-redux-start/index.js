const fs = require('fs');
const express = require('express');
const app = express();
const db = require('./db.json');

// Set up ExpressJS middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// If we are in a development environment, load up the webpack middleware as well.
// If we are in production, it means that the js files have been built and placed in the static folder, so webpack/babel is no longer needed.
if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development' || !fs.existsSync('./public/bundle.js')) {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');
    const webpackConfig = require('./webpack.dev');
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
}

app.get('/api/v1', (req, res) => {
    res.send('Hello world.');
});

const server = app.listen(3000, () => {console.log('Listening on port 3000')})