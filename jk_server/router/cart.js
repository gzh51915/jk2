const express = require('express');
// 使用express中间件Router来实现server与router的连接
const Router = express.Router()

const db = require('../db');



module.exports = Router