
const express = require('express');
const Router = express.Router(); // function(){}

const db = require('../db')

/**
*获得获得首页数据
 * @api {get} /home 获得首页数据
 * @apiDescription 获得首页数据
 * @apiName submit-login
 * @apiGroup home
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "data" : {
 *          data
 *      }
 *  }
 * @apiSampleRequest http://10.3.135.46:3000/api/home
 * @apiVersion 1.0.0
 */
Router.get('/',async (req,res) => {
    const data = await db.find('home',{})


    if(data.length > 0){
        res.send({
            code:200,
            data
        })
    }else{
        res.send({
            code:400
        })
    }
})

module.exports = Router