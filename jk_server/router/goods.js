const express = require('express');

// 使用express中间件Router来实现server与router的连接
const Router = express.Router()

const db = require('../db')

// 查询所有商品 /goods/
Router.get('/', async (req, res) => {
    const { page = 1, size = 10, sort = { add_time: -1 } } = req.query;
    const limit = size * 1;
    const skip = (page - 1) * size;

    let result
    let data;
    try {

        result = await db.find('goods', {}, { limit, skip, sort })
        data = {
            code: 1,
            data: result,
            msg: 'success'
        }
    } catch (err) {
        console.log(error);
        data = {
            code: 0,
            data: [],
            msg: 'fail'
        }
    }
    // 请求<->响应
    res.send(data)
})
Router.post('/', (req, res) => { //增
    // db.create('goods')
})

// 获取库存数量
Router.get('/kucun',(req,res)=>{
    res.send({
        code:1,
        data:4,
        msg:'success'
    })
})

// 查询id为某个值的商品
Router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const result = await db.find('goods', { _id: id });
    if (result.length > 0) {
        res.send({
            code: 1,
            data: result[0],
            msg: 'success'
        })
    } else {
        res.send({
            code: 0,
            data: [],
            msg: 'fail'
        })
    }
})

module.exports = Router