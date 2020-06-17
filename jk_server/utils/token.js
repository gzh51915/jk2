const jwt = require('jsonwebtoken');

// 密钥
const secret = 'didi';

const create = (data,expiresIn=60*60*2)=>{
    // username: 用于加密的用户名
    // expires: token有效期(单位: s)，默认2小时


    //生成 Token：根据传入用户名和key进行加密，并设置有效期
    const token = jwt.sign(data, secret, {
        expiresIn
    });
    return token; // 加密后的字符串
 }

const verify = (token)=>{
    let res = false;
    try{
        // 校验成功：token不被篡改，也没失效的情况下
        // 校验失败：直接报错
        res = jwt.verify(token, secret);//得出解密后的结果Object:{username:xxx...}
    }catch(err){
        res = false;
    }

    return res;
 }


 module.exports = {
    create,
    verify
 }