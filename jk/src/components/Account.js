import React from 'react'
import { EyeTwoTone, EyeInvisibleTwoTone } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';
import { user } from "../api/index";

export default function Account(props) {
    let tf = true;
    function eye() {
        console.log(props);

        if (tf) {
            document.getElementById('inner2').type = 'text'
            document.getElementById('open').setAttribute('style', 'width:20px;height:20px;position:absolute;right:50px;top:150px;display:none;outline:none')
            document.getElementById('close').setAttribute('style', 'width:20px;height:20px;position:absolute;right:50px;top:150px;display:block;outline:none')
            tf = !tf
        } else {
            document.getElementById('inner2').type = 'password'
            document.getElementById('open').setAttribute('style', 'width:20px;height:20px;position:absolute;right:50px;top:150px;display:block;outline:none')
            document.getElementById('close').setAttribute('style', 'width:20px;height:20px;position:absolute;right:50px;top:150px;display:none;outline:none')
            tf = !tf
        }
    }


    function login() {
        let username = document.getElementById('inner1').value
        let password = document.getElementById('inner2').value
        user(username, password).then((res, req) => {
            if (res.data.code === 200) {
                sessionStorage.setItem('authorization', res.data.authorization)
            } else {

                alert('密码或用户名错误！')
            }
        })
    }
    // 判断是否输入账户和密码，输入则登录按钮高亮
    function lightButton() {
        let inner1 = document.getElementById('inner1').value
        let inner2 = document.getElementById('inner2').value
        if (inner1 && inner2) {
            document.getElementById('loginBtn').setAttribute('style', 'background-color:#20a0ff;width:332px;height:34px;border:none;margin-top:25px;color:#fff')
        }
    }
    return (
        <div style={{ padding: '0 21.5px' }}>
            <input id='inner1' onChange={lightButton} placeholder=" 请输入手机号/邮箱" style={{ border: 'none', borderBottom: '1px solid #efefef ', height: '48px', fontSize: '14px', width: '332px', outline: 'none' }} />
            <input id='inner2' onChange={lightButton} type='password' placeholder=" 请输入您的密码"
                style={{ border: 'none', borderBottom: '1px solid #efefef', height: '47px', fontSize: '14px', width: '332px', outline: 'none' }} />
            <EyeTwoTone id='close' onClick={eye} style={{ display: 'none' }} />
            <EyeInvisibleTwoTone id='open' onClick={eye} style={{ width: '20px', height: '20px', position: 'absolute', right: '50px', top: '150px', display: 'block', outline: 'none' }} />
            <button onClick={login} id='loginBtn' style={{ backgroundColor: '#95d1ff', width: '332px', height: '34px', border: 'none', color: '#fff', marginTop: '25px' }}>登录</button>
            <NavLink to='/my/phone'>忘记密码</NavLink>
        </div >
    )
}
