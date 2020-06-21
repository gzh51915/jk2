import React from 'react'
import { code, user, reg } from "../api/index";

export default function Phone(props) {
    // const type = props.location.state.type
    // 获取验证码,并禁止点击直至倒计时结束
    var phoneCode = ''
    function getCode() {
        let inner1 = document.getElementById('inner1').value    //本用来向指定手机号发送验证码
        if(!/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(inner1)){
            alert("重新输入手机号！")
            return
        }
        let codeBtn = document.getElementById('code')
        // 点击后移除点击事件，防止重复发送请求
        codeBtn.removeEventListener('click', getCode)
        codeBtn.addEventListener('click', e => e.stopPropagation())
        code().then((res, req) => {
            console.log(res.data.phoneCode);
            phoneCode = res.data.phoneCode
            let num = 60
             codeBtn.textContent = `重新发送(${num}秒)`
            // 定时器，修改按钮内冷却剩余秒数
            var count = setInterval(() => {
                num--
                codeBtn.textContent = `重新发送(${num}秒)`
                if (num === 1) {
                    // console.log('时间到');
                    clearInterval(count)
                    codeBtn.textContent = '获取验证码'
                    codeBtn.addEventListener('click', getCode)
                }
            }, 1000);
        })
    }


    // 登录
    function login() {
        let inner1 = document.getElementById('inner1').value
        let inner2 = parseInt(document.getElementById('inner2').value)
        // 判断输入的验证码是否正确，正确则直接登录
        if ((inner2 === phoneCode)) {
            user(inner1).then((res, req) => {//查询是否存在用户
                if (res.data.code === 400) {//如果不存在则注册
                    reg(inner1).then((res,req) => {//注册
                        sessionStorage.setItem('authorization', res.data.authorization)
                        sessionStorage.setItem('user', inner1)
                        props.history.push('/my/phone')
                    })
                } else {
                    sessionStorage.setItem('authorization', res.data.data.authorization)
                    sessionStorage.setItem('user', inner1)
                    props.history.push('/my/phone')
                }
            })
        } else {
            alert('您输入的信息或验证码有误!')
        }
    }

    // 判断是否输入手机号和验证码，输入则登录按钮高亮
    function lightButton() {
        let inner1 = document.getElementById('inner1').value
        let inner2 = document.getElementById('inner2').value
        if (inner1 && inner2) {
            document.getElementById('loginBtn').setAttribute('style', 'background-color:#20a0ff;width:332px;height:34px;border:none;margin-top:25px;color:#fff')
        }
    }
    return (
        <div style={{ padding: '0 21.5px' }}>
            <input id='inner1' onChange={lightButton} placeholder=" 请输入您的手机号" maxLength="11" style={{ border: 'none', borderBottom: '1px solid #efefef ', height: '48px', fontSize: '14px', width: '332px', outline: 'none' }} />
            <input id='inner2' onChange={lightButton} placeholder=" 验证码" style={{ border: 'none', borderBottom: '1px solid #efefef', height: '47px', fontSize: '14px', width: '332px', outline: 'none' }} />
            <button id='code' onClick={getCode} style={{ position: 'absolute', right: '25px', top: '145px', border: '1px solid #2ca3ff', color: '#2ca3ff', background: '#fff', outline: 'none', fontSize: '12px', padding: '5px 5px' }}>获取验证码</button>
            <button id='loginBtn' onClick={login} style={{ backgroundColor: '#95d1ff', width: '332px', height: '34px', border: 'none', color: '#fff', marginTop: '25px' }}>登录</button>
            <div style={{ marginTop: '13px' }}>
                <span style={{ fontSize: '12px', color: '#999', lineHeight: '14px', display: 'inline-block' }}>温馨提示：未注册过健客的手机号，登录时会自动注册健客账号，且代表您已同意
                <a style={{ textDecoration: 'none', color: '#2ca3ff' }} href='https://m.jianke.com/account/clause'>《健客服务条款》</a>
                    <a style={{ textDecoration: 'none', color: '#2ca3ff' }} href='https://m.jianke.com/account/privacy'>《健客隐私政策》</a>
                </span>
            </div>
        </div >
    )
}
