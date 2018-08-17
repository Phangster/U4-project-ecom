const express = require('express');
var cookieParser = require('cookie-parser')
const app = express();
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');
const {resolve} = require('path');
const fallback = require('express-history-api-fallback');
const compiler = webpack(webpackConfig);

app.use(cookieParser())
app.use(webpackDevMiddleware(compiler, {
    stats: {
        colors: true
    }
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./routes')(app);

app.use(fallback(resolve(__dirname, '..', '..', 'public/index.html')));

const server = app.listen(3000, () => {console.log('Setting sail from 3000!!!')});
