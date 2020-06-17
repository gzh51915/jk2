const express = require('express');
// 使用express中间件Router来实现server与router的连接
const Router = express.Router()

const db = require('../db');
const { json } = require('express');

/**
*获取头条资讯
 * @api {get} /news 获取头条资讯
 * @apiDescription sort参数决定获取的数据板块，从0-4
 * @apiName submit-login
 * @apiGroup news
 * @apiParam {string} sort 板块
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code : "200",
 *      result
 *  }
 * @apiSampleRequest http://10.3.135.46:3000/api/news/?sort=0
 * @apiVersion 1.0.0
 */
Router.get('/', async (req, res) => {
    const { sort } = req.query  ;
    // console.log(req);
    
    // 不加入sort可获得参数，加入则找不到，怀疑是表结构查询不到sort
    const result = await db.find('news',{sort})
    
    if (result.length > 0) {
        res.send({
            code: 200,
            result
        })
    } else {
        res.send({
            code: 400
        })
    }
})



/**
*获取资讯详情
 * @api {get} /news 获取资讯详情
 * @apiDescription dd参数决定获取的数据板块，如01/02/03/31,十位数为第n板块，个位数为第n条
 * @apiName submit-login
 * @apiGroup news
 * @apiParam {string} dd 板块+第几条
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code : "200",
 *      result
 *  }
 * @apiSampleRequest http://10.3.135.46:3000/api/news/?dd=01
 * @apiVersion 1.0.0
 */
// 不可用art或article当字段，否则无法获取数据
Router.post('/', async (req,res)=>{
    const { dd } = req.query;
    console.log(dd);

    const result = await db.find('article',{dd})
    
    if (result.length > 0) {
        res.send({
            code: 200,
            result
        })
    } else {
        res.send({
            code: 400,
            result
        })
    }
})



module.exports = Router