const express = require('express');

// 使用express中间件Router来实现server与router的连接
const Router = express.Router()

const db = require('../db')

/**
*获取分类列表或商品
 * @api {post} /category 获取分类列表或商品
 * @apiDescription 获取分类列表或商品
 * @apiName submit-login
 * @apiGroup category
 * @apiSuccess {json} data
 * @apiParam {num} platform 常为1
 * @apiParam {num} pid 取某个类别下的数据，若无pid则只获取列表
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      data
 *  }
 * @apiSampleRequest http://10.3.135.46:3000/api/category&platform=1&pid=311
 * @apiVersion 1.0.0
 */
Router.post('/', async (req, res) => {
    const { platform,pid } = req.query;
    // console.log(req.query);
    let data = ''
    // 判断pid存在否，按需取数据
    if(pid){
         data = await db.find('category', { platform: platform,pid:pid });
        
    }else{
         data = await db.find('category', { platform: platform,pid:null});
    }
    
    if (data.length > 0) {
        res.send({
            code: 1,
            data,
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

/**
*获取分类板块商品列表页
 * @api {get} /category 获取分类板块商品列表页
 * @apiDescription num参数决定获取的数据出处，格式(xy)，如11/12/21/22/31,十位数代表左侧列表的行数，个位数代表该类下的第n个商品类
 * @apiName submit-login
 * @apiGroup category
 * @apiParam {string} num 板块
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code : "200",
 *      result
 *  }
 * @apiSampleRequest http://10.3.135.46:3000/api/search/?num=11
 * @apiVersion 1.0.0
 */
Router.get('/',async (req,res)=>{
    const {num}  = req.query;
    const result = await db.find('search',{num})
    if(result.length>0){
        res.send({
            code:200,
            result
        })
    }else{
        res.send({
            code:400
        })
    }
})

module.exports = Router