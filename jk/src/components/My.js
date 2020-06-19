import React from 'react'
import { Route, Switch, Redirect } from 'react-router';
import Phone from './Phone'
import Account from './Account'
import { NavLink } from 'react-router-dom';
import { SearchOutlined , HomeOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
function My(props) {
    // 返回上一页
    function goBack() {
        window.history.go(-1)
    }
    // 点击...显示或关闭上方隐藏的导航栏
    function showNav() {
       const btn =  document.getElementById('btn')
       const nav = document.getElementById('nav')
       const head = document.getElementsByTagName('header')[0]
       if(btn.textContent === '...'){
        btn.textContent = 'x';
        nav.setAttribute('style','display:flex;list-style:none;justify-content:space-around;position:absolute;padding:0;margin:0; width:100%;height:61px; background-color: #f2f2f2;align-items:center')
       head.setAttribute('style','height:106px')
       console.log(head);
       
    }else{
        btn.textContent = '...'
        nav.setAttribute('style','display:none')
        head.setAttribute('style','height:45px')
       }
        
    }

    // 获取用户登录信息
    const user = sessionStorage.getItem('authorization')
    console.log(user);
    // 三目判断用户是否登录，没登录就跳到登录页,如何隐藏导航路由?store?
    return (
        !user ?
            <div  style={{backgroundColor:'#fff'}}>
                <header>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', width: '343px', height: '25px', borderBottom: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '30px', width: '24px', height: '24px', lineHeight: '24px' }} onClick={goBack}>&lt;</div>
                    <span style={{ font: 'YaHei', fontSize: '17px' }}>用户登录</span>
                    <div id={'btn'} style={{ fontSize: '30px', width: '11px', height: '24px', lineHeight: '12px' }} onClick={showNav}>...</div>
                </div>
                    <ul id={'nav'} style={{display:'none'}}>
                        <li style={{width: '10px',height: '10px',borderTop: '1px solid #eee',borderLeft: '1px solid #ddd',position: 'absolute',right: '12px',top: '-7px',backgroundColor: '#f2f2f2',transform: 'rotate(45deg)'}}></li>
                        <li style={{height:'45px'}}> <NavLink style={{display:'flex',flexDirection:'column'}} to='/Home' activeClassName="active"><HomeOutlined style={{fontSize:'20px',color:'#000'}} /><span style={{marginTop:'7px'}}>首页</span></NavLink></li>
                        <li style={{height:'45px'}}> <NavLink style={{display:'flex',flexDirection:'column'}} to='/Sort' activeClassName="active"><SearchOutlined style={{fontSize:'20px',color:'#000'}} /><span style={{marginTop:'7px'}}>分类搜索</span></NavLink></li>
                        <li style={{height:'45px'}}> <NavLink style={{display:'flex',flexDirection:'column'}} to='/Cart' activeClassName="active"><ShoppingCartOutlined style={{fontSize:'20px',color:'#000'}} /><span style={{marginTop:'7px'}}>购物车</span></NavLink></li>
                        <li style={{height:'45px'}}> <NavLink style={{display:'flex',flexDirection:'column'}} to='/My' activeClassName="active"><UserOutlined style={{fontSize:'20px',color:'#000'}} /><span style={{marginTop:'7px'}}>个人中心</span></NavLink></li>
                    </ul>
                </header>
                <div style={{width:'100%',height:'38px',display:'flex',justifyContent:'center',lineHeight:'37px',fontSize:'14px',borderBottom:'1px solid #e5e5e5'}}>
                    <NavLink activeStyle={{borderBottom:'2px solid #2ca3ff',color:'#000'}} style={{width:'166px',textAlign:'center',color:'#666'}} to={{
                        pathname:'/My/Phone',
                        state:{
                            type:'true'
                        }}}>手机号快捷登录</NavLink>
                    <NavLink activeStyle={{borderBottom:'2px solid #2ca3ff',color:'#000'}} style={{width:'166px',textAlign:'center',lineHeight:'37px',color:'#666',fontSize:'14px'}} to='/My/Account'
                      > 帐号密码登录</NavLink>
                </div>
                <Switch>
                    <Route path='/My/Phone' component={Phone}></Route>
                    <Route path='/My/account' component={Account}></Route>
                    <Redirect from='/My' to='/My/phone'></Redirect>
                </Switch>
            </div>
            :
            <div>个人信息页</div>


    )

}

export default My