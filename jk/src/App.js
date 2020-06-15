import React from 'react';
// import './App.css';
import Home from './components/Home'
import Sort from './components/Sort'
import News from './components/News'
import Cart from './components/Cart'
import My from './components/My'

import { withRouter, Route, Switch, Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import { HomeOutlined,AppstoreOutlined,AuditOutlined,ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';
import { Button } from 'antd'
import './style/index.css'



function App() {
  return (
    <div className="App" >
      <Switch>
        <Route path='/Home' component={Home}></Route>
        <Route path='/Sort' component={Sort}></Route>
        <Route path='/News' component={News}></Route>
        <Route path='/Cart' component={Cart}></Route>
        <Route path='/My' component={My}></Route>
        <Redirect from='/' to='/Home'></Redirect>
      </Switch>
      <div className="Appa">
        <NavLink className="navigation" to='/Home' activeClassName="active"><i><HomeOutlined /></i><div>首页</div></NavLink>
        <NavLink className="navigation" to='/Sort' activeClassName="active"><i><AppstoreOutlined /></i><div>分类</div></NavLink>
        <NavLink className="navigation" to='/News' activeClassName="active"><i><AuditOutlined /></i><div>头条</div></NavLink>
        <NavLink className="navigation" to='/Cart' activeClassName="active"><i><ShoppingCartOutlined /></i><div>购物车</div></NavLink>
        <NavLink className="navigation" to='/My' activeClassName="active"><i><UserOutlined /></i><div>我的</div></NavLink>
      </div>
    </div>

  );
}

export default withRouter(App);
