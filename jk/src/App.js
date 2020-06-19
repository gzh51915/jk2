import React from 'react';
import './App.css';
import { withRouter, Route, Switch, Redirect } from 'react-router';
import Home from './components/Home'
import Sort from './components/Sort'
import News from './components/News'
import Cart from './components/Cart'
import My from './components/My'
import { NavLink } from 'react-router-dom';
<<<<<<< Updated upstream
import {Button} from 'antd'
=======
import { HomeOutlined,AppstoreOutlined,AuditOutlined,ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';
import './style/index.css'
>>>>>>> Stashed changes



function App() {
function App(props) {
  // console.log(props)
  if(props.location.pathname === '/My'){
    // document.getElementsByClassName('Appa')[0]
    // console.log(document.getElementsByClassName('Appa'));
    
  }
  return (
    <div className="App" style={{display:'flex',flexDirection:'column',alignContent:'space-bewteen',height:'100%'}}>
      <Switch>
        <Route path='/Home' component={Home}></Route>
        <Route path='/Sort' component={Sort}></Route>
        <Route path='/News' component={News}></Route>
        <Route path='/Cart' component={Cart}></Route>
        <Route path='/My' component={My}></Route>
        <Redirect from='/' to='/Home'></Redirect>
      </Switch>
      <div style={{display:'flex',alignContent:'space-around'}}>
        <NavLink to='/Home' style={{display:'inline-block',flex:'1',backgroundColor:'lightgreen'}}>Home</NavLink>
        <NavLink to='/Sort' style={{display:'inline-block',flex:'1',backgroundColor:'lightgreen'}}>Sort</NavLink>
        <NavLink to='/News' style={{display:'inline-block',flex:'1',backgroundColor:'lightgreen'}}>News</NavLink>
        <NavLink to='/Cart' style={{display:'inline-block',flex:'1',backgroundColor:'lightgreen'}}>Cart</NavLink>
        <NavLink to='/My' style={{display:'inline-block',flex:'1',backgroundColor:'lightgreen'}}>My</NavLink>
      </div>
    </div>

  );
}

export default withRouter(App);
