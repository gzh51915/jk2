import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router';
import Phone from './Phone'
import Account from './Account'
import { NavLink } from 'react-router-dom';
import { SearchOutlined, HomeOutlined, UserOutlined, ShoppingCartOutlined, PayCircleOutlined, LayoutOutlined, CarOutlined, FileTextOutlined, StarOutlined, BankOutlined, LinkOutlined, QuestionOutlined, CrownOutlined, PhoneOutlined } from '@ant-design/icons'
function My(props) {
    // 返回上一页
    function goBack() {
        window.history.go(-1)
    }
    // 点击...显示或关闭上方隐藏的导航栏
    function showNav() {
        const btn = document.getElementById('btn')
        const nav = document.getElementById('nav')
        const head = document.getElementsByTagName('header')[0]
        if (btn.textContent === '...') {
            btn.textContent = 'x';
            nav.setAttribute('style', 'display:flex;list-style:none;justify-content:space-around;position:absolute;padding:0;margin:0; width:100%;height:61px; background-color: #f2f2f2;align-items:center')
            head.setAttribute('style', 'height:106px')
            console.log(head);

        } else {
            btn.textContent = '...'
            nav.setAttribute('style', 'display:none')
            head.setAttribute('style', 'height:45px')
        }

    }

    // 跳转到购物车
    function goCart() {
        props.history.push('cart')
    }

    // 退出登录
    function logout() {
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('authorization')
        props.history.push('/my')
    }
    // 获取用户登录信息
    const authorization = sessionStorage.getItem('authorization')
    var user = sessionStorage.getItem('user')
    if (/^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(user)) {
        user = user.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    }

    const [username] = useState(user)
    // const [authorization] = useState(sessionStorage.getItem('authorization'))
    return (
        // 三目判断用户是否登录，没登录就跳到登录页,如何隐藏导航路由?store?
        !authorization ?

            // 登录注册页
            <div style={{ backgroundColor: '#fff' }}>
                <header>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', width: '343px', height: '25px', borderBottom: '1px solid #e5e5e5' }}>
                        <div style={{ fontSize: '30px', width: '24px', height: '24px', lineHeight: '24px' }} onClick={goBack}>&lt;</div>
                        <span style={{ font: 'YaHei', fontSize: '17px' }}>用户登录</span>
                        <div id={'btn'} style={{ fontSize: '30px', width: '11px', height: '24px', lineHeight: '12px' }} onClick={showNav}>...</div>
                    </div>
                    <ul id={'nav'} style={{ display: 'none' }}>
                        <li style={{ width: '10px', height: '10px', borderTop: '1px solid #eee', borderLeft: '1px solid #ddd', position: 'absolute', right: '12px', top: '-7px', backgroundColor: '#f2f2f2', transform: 'rotate(45deg)' }}></li>
                        <li style={{ height: '45px' }}> <NavLink style={{ display: 'flex', flexDirection: 'column', color: '#000' }} to='/Home' activeClassName="active"><HomeOutlined style={{ fontSize: '20px', color: '#000' }} /><span style={{ marginTop: '7px' }}>首页</span></NavLink></li>
                        <li style={{ height: '45px' }}> <NavLink style={{ display: 'flex', flexDirection: 'column', color: '#000' }} to='/Sort' activeClassName="active"><SearchOutlined style={{ fontSize: '20px', color: '#000' }} /><span style={{ marginTop: '7px' }}>分类搜索</span></NavLink></li>
                        <li style={{ height: '45px' }}> <NavLink style={{ display: 'flex', flexDirection: 'column', color: '#000' }} to='/Cart' activeClassName="active"><ShoppingCartOutlined style={{ fontSize: '20px', color: '#000' }} /><span style={{ marginTop: '7px' }}>购物车</span></NavLink></li>
                        <li style={{ height: '45px' }}> <NavLink style={{ display: 'flex', flexDirection: 'column', color: '#000' }} to='/My' activeClassName="active"><UserOutlined style={{ fontSize: '20px', color: '#000' }} /><span style={{ marginTop: '7px' }}>个人中心</span></NavLink></li>
                    </ul>
                </header>
                <div style={{ width: '100%', height: '38px', display: 'flex', justifyContent: 'center', lineHeight: '37px', fontSize: '14px', borderBottom: '1px solid #e5e5e5' }}>
                    <NavLink activeStyle={{ borderBottom: '2px solid #2ca3ff', color: '#000' }} style={{ width: '166px', textAlign: 'center', color: '#666' }} to={{
                        pathname: '/My/Phone',
                        state: {
                            type: 'true'
                        }
                    }}>手机号快捷登录</NavLink>
                    <NavLink activeStyle={{ borderBottom: '2px solid #2ca3ff', color: '#000' }} style={{ width: '166px', textAlign: 'center', lineHeight: '37px', color: '#666', fontSize: '14px' }} to='/My/Account'
                    > 帐号密码登录</NavLink>
                </div>
                <Switch>
                    <Route path='/My/Phone' component={Phone}></Route>
                    <Route path='/My/account' component={Account}></Route>
                    <Redirect from='/My' to='/My/phone'></Redirect>
                </Switch>
            </div>
            :

            // 个人信息页
            <div style={{color:'#888'}}>
                <header style={{ backgroundColor: '#fff' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', width: '343px', height: '25px', borderBottom: '1px solid #e5e5e5' }}>
                        <div style={{ fontSize: '30px', width: '24px', height: '24px', lineHeight: '24px' }} onClick={goBack}>&lt;</div>
                        <span style={{ font: 'YaHei', fontSize: '17px' }}>我的健客</span>
                        <div id={'btn'} style={{ fontSize: '30px', width: '11px', height: '24px', lineHeight: '12px' }} onClick={showNav}>...</div>
                    </div>
                    <ul id={'nav'} style={{ display: 'none' }}>
                        <li style={{ width: '10px', height: '10px', borderTop: '1px solid #eee', borderLeft: '1px solid #ddd', position: 'absolute', right: '12px', top: '-7px', backgroundColor: '#f2f2f2', transform: 'rotate(45deg)' }}></li>
                        <li style={{ height: '45px' }}> <NavLink style={{ display: 'flex', flexDirection: 'column', color: '#000' }} to='/Home' activeClassName="active"><HomeOutlined style={{ fontSize: '20px', color: '#000' }} /><span style={{ marginTop: '7px' }}>首页</span></NavLink></li>
                        <li style={{ height: '45px' }}> <NavLink style={{ display: 'flex', flexDirection: 'column', color: '#000' }} to='/Sort' activeClassName="active"><SearchOutlined style={{ fontSize: '20px', color: '#000' }} /><span style={{ marginTop: '7px' }}>分类搜索</span></NavLink></li>
                        <li style={{ height: '45px' }}> <NavLink style={{ display: 'flex', flexDirection: 'column', color: '#000' }} to='/Cart' activeClassName="active"><ShoppingCartOutlined style={{ fontSize: '20px', color: '#000' }} /><span style={{ marginTop: '7px' }}>购物车</span></NavLink></li>
                        <li style={{ height: '45px' }}> <NavLink style={{ display: 'flex', flexDirection: 'column', color: '#000' }} to='/My' activeClassName="active"><UserOutlined style={{ fontSize: '20px', color: '#000' }} /><span style={{ marginTop: '7px' }}>个人中心</span></NavLink></li>
                    </ul>
                </header>
                <div className='user-info' style={{ background: '#1096fa', paddingTop: '19px', display: 'flex', flexDirection: "column", height: '145px' }}>
                    <div style={{ textAlign: "center" }}><img src='../img/avator.png' style={{ width: '72.5px' }} alt='avator' /></div>
                    <p style={{ textAlign: "center", lineHeight: '19px', margin: '0', fontSize: '13px', color: '#fff' }}>
                        <span >{username}</span>
                        <span style={{ marginLeft: '10px', background: 'url(../img/level.png)  no-repeat 0', backgroundSize: 'contain', paddingLeft: '14px', fontSize: '12px' }}>  普通</span>
                    </p>
                    <p style={{ textAlign: "center", lineHeight: '19px', margin: '0', fontSize: '13px', color: '#fff' }}>
                        <span>健康币: 0</span>
                        <span style={{ marginLeft: '14px' }}>成长值: 0</span>
                    </p>
                    <div className='wave'>
                        <div style={{ position: 'absolute' }}><canvas width="375" height="24"></canvas></div>
                        <div style={{ position: 'absolute' }}><canvas width="375" height="24"></canvas></div>
                        <div style={{ position: 'absolute' }}><canvas width="375" height="24"></canvas></div>
                    </div>
                </div>
                <div className='user-order' style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 10px', height: '44px', borderBottom: '1px solid #eee', alignItems: 'center' }}>
                        <span >我的订单</span><span style={{ fontSize: '12px', color: '#666' }}>查看全部订单</span>
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', padding: '0', fontSize: '12px', marginBottom: '10px' }}>
                        <li style={{ display: 'flex', flexDirection: 'column' }}><span style={{ textAlign: 'center', fontSize: '17px' }}><PayCircleOutlined /></span><span>待付款</span></li>
                        <li style={{ display: 'flex', flexDirection: 'column' }}><span style={{ textAlign: 'center', fontSize: '17px' }}><LayoutOutlined /></span><span>待发货</span></li>
                        <li style={{ display: 'flex', flexDirection: 'column' }}><span style={{ textAlign: 'center', fontSize: '17px' }}><CarOutlined /></span><span>待收货</span></li>
                        <li style={{ display: 'flex', flexDirection: 'column' }}><span style={{ textAlign: 'center', fontSize: '17px' }}><FileTextOutlined /></span><span>待评价</span></li>
                    </ul>
                </div>
                <div className='user-option' style={{ marginBottom: '10px' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around', padding: '0', fontSize: '12px', flexWrap: 'wrap', background: '#fff' }}>
                        <li onClick={goCart} style={{ display: 'flex', flexDirection: 'column', flex: '24%', justifyContent: 'center', borderRight: '1px solid #eee', borderBottom: '1px solid #eee', textAlign: 'center', height: '66px' }}><span style={{ textAlign: 'center', fontSize: '15px' }}><ShoppingCartOutlined /></span><span>购物车</span></li>
                        <li style={{ display: 'flex', flexDirection: 'column', flex: '24%', justifyContent: 'center', borderRight: '1px solid #eee', borderBottom: '1px solid #eee', textAlign: 'center', height: '66px' }}><span style={{ textAlign: 'center', fontSize: '15px' }}><StarOutlined /></span><span>我的收藏</span></li>
                        <li style={{ display: 'flex', flexDirection: 'column', flex: '24%', justifyContent: 'center', borderRight: '1px solid #eee', borderBottom: '1px solid #eee', textAlign: 'center', height: '66px' }}><span style={{ textAlign: 'center', fontSize: '15px' }}><LinkOutlined /></span><span>补贴券</span></li>
                        <li style={{ display: 'flex', flexDirection: 'column', flex: '24%', justifyContent: 'center', borderRight: '1px solid #eee', borderBottom: '1px solid #eee', textAlign: 'center', height: '66px' }}><span style={{ textAlign: 'center', fontSize: '15px' }}><QuestionOutlined /></span><span>我的问答</span></li>
                        <li style={{ display: 'flex', flexDirection: 'column', flex: '24%', justifyContent: 'center', borderRight: '1px solid #eee', borderBottom: '1px solid #eee', textAlign: 'center', height: '66px' }}><span style={{ textAlign: 'center', fontSize: '15px' }}><PhoneOutlined /></span><span>用药咨询</span></li>
                        <li style={{ display: 'flex', flexDirection: 'column', flex: '24%', justifyContent: 'center', borderRight: '1px solid #eee', borderBottom: '1px solid #eee', textAlign: 'center', height: '66px' }}><span style={{ textAlign: 'center', fontSize: '15px' }}><CrownOutlined /></span><span>会员中心</span></li>
                        <li style={{ display: 'flex', flexDirection: 'column', flex: '24%', justifyContent: 'center', borderRight: '1px solid #eee', borderBottom: '1px solid #eee', textAlign: 'center', height: '66px' }}><span style={{ textAlign: 'center', fontSize: '15px' }}><BankOutlined /></span><span>线下药店</span></li>
                        <li style={{ display: 'flex', flexDirection: 'column', flex: '24%', justifyContent: 'center', borderRight: '1px solid #eee', borderBottom: '1px solid #eee', textAlign: 'center', height: '66px' }}></li>
                    </ul>
                </div>
                <footer style={{fontSize: '12px',textAlign:'center' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', padding: '0 10px'}}>
                        <li><span>欢迎您: {username}</span>| <span onClick={logout}> 退出</span></li>
                        <li><span>关于健客 </span>| <span> 帮助中心</span></li>
                    </ul>
                    <dl>
                        <dt style={{color:'#0075de',marginBottom:'9.5px'}}>关注【健客网上药店】公众号，抢先获得特价活动通知</dt>
                        <dd style={{marginLeft:'0'}}>健客全国免费专线 400-6666-800</dd>
                        <dd style={{marginLeft:'0'}}>药品交易资格证：粤C20140009</dd>
                        <dd style={{marginLeft:'0'}}>Copyright©2006-2019 健客 版权所有</dd> 
                    </dl>

                </footer>
            </div>


    )

}

export default My