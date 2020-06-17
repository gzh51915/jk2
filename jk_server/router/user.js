
const express = require('express');
const Router = express.Router(); // function(){}


const db = require('../db')
const token = require('../utils/token')

/**
*获取所有用户
 * @api {get} /user 获取所有用户
 * @apiDescription 获取所有用户
 * @apiName submit-login
 * @apiGroup User
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      data
 *  }
 * @apiSampleRequest http://10.3.135.46:3000/api/user
 * @apiVersion 1.0.0
 */
// 获取所有用户
Router.get('/', async (req, res) => {
    const data = await db.find('user', {})

    if (data.length > 0) {
        res.send({
            code: 200,
            data
        })
    } else {
        res.send({
            code: 400
        })
    }
})


/**
 * @api {post} /api/user  注册：添加一个用户
 * @apiDescription  注册：添加一个用户
 * @apiName 注册
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *         code,
 *         msg
 *      }
 *  }
 * @apiSampleRequest http://10.3.135.46:3000/api/user/?username=dd&password=123456
 * @apiVersion 1.0.0
 */
// 注册：添加一个用户
Router.post('/', async (req, res) => {
    // 获取username,password
    const { username, password } = req.query;
    const result = await db.find('user', { username })
    // console.log(username, password)
    if (result.length > 0) {
        res.send({
            code: 400,
            msg:'该用户已存在!'
        })
    } else {
        try {
            await db.insert('user', { username, password, regtime: new Date() })
            res.send({
                code: 200,
                msg:'注册成功!'
            })
        } catch (err) {
            console.log('err=', err)
            res.send({
                code: 400,
                msg:'注册失败'
            })
        }
    }
})


/**
 * @api {post} /api/user/login 用户登录
 * @apiDescription 用户登录
 * @apiName 用户登录
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          "username" : "username",
 *          "password" : "password"
 *      }
 *  }
 * @apiSampleRequest http://10.3.135.46:3000/api/user/login/?username=gg&password=123456
 * @apiVersion 1.0.0
 */
// 登录
Router.post('/login', async (req, res) => {
    const { username, password } = req.query;

    // 查询数据库，如果得到数据说明用户名和密码正确
    // 反之，查询不到数据，则表示用户名和密码错误
    const result = await db.find('user', { username, password })

    if (result.length > 0) {
        // 生成一个token，并返回给前端
        const authorization = token.create({ username })
        res.send({
            code: 200,
            data: {
                authorization
            }
        })
    } else {
        res.send({
            code: 400
        })
    }
})

// 校验令牌
Router.get('/verify', async (req, res) => {
    const { authorization } = req.query;

    const result = token.verify(authorization);
    if (result) {
        res.send({
            code: 200
        })
    } else {
        res.send({
            code: 400
        })
    }
})

// 获取某一个用户的信息
// Router.get('/:id',(req,res)=>{
//     // 获取id值
//     // const id = req.query
//     const {id} = req.params
//     res.send(`id为${id}的用户`)
// })

/**
 * @api {post} /api/user/updata  更改或删除用户
 * @apiDescription  更改或删除用户,更改将返回更改后的用户信息
 * @apiName 更改或删除
 * @apiGroup User
 * @apiParam {string} username 用户名
 * @apiParam {string} password 要更改的密码
 * @apiParam {string} del 是否删除用户，是则true
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          "username" : "username",
 *          "password" : "password"
 *      }
 *  }
 * @apiSampleRequest http://10.3.135.46:3000/api/user/?username=gg&password=1915&del=true
 * @apiVersion 1.0.0
 */
// 更改密码或删除用户
Router.post('/updata', async (req, res) => {
    // 获取username,password
    const { username, password, del } = req.query;
    console.log(username, password, del)

    // 如果del为true则删除用户
    if (del == true) {
        try {
            const data = await db.delete('user', { 'username': username })
            res.send({
                code: 200,
                'result': 'success'
            })
        } catch (err) {
            console.log('err=', err)
            res.send({
                code: 400
            })
        }
    } else {
        // 改密码，写入数据库
        try {
            await db.update('user', { username: username }, { username, password, updatatime: new Date() })
            console.log('user=', username, password)
            res.send({
                code: 200,
                'result': 'success'
            })

        } catch (err) {
            console.log('err=', err)
            res.send({
                code: 401
            })
        }
    }


})

module.exports = Router