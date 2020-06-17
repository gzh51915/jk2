
const express = require('express');
const Router = express.Router();

const session = require('express-session');

const goods = require('./goods'); // express.router()
const user = require('./user');
const home = require('./home');
const news = require('./news')
const category = require('./category');
const cart = require('./cart');
const verifycode = require('./verifycode');

// CORS
Router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
});

// 设置session
// 给每个用户设置sessionid，用来识别每个用户的请求是否为同一个人
Router.use(session({
    secret: 'didi',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 2 }
}))

Router.use(express.json(), express.urlencoded())
Router.use('/goods', goods);
Router.use('/user', user);
Router.use('/category', category);
Router.use('/verifycode', verifycode);
Router.use('/home',home)
Router.use('/news',news)
Router.use('/cart',cart)

module.exports = Router