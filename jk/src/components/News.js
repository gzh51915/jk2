import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router'
import {NavLink} from 'react-router-dom'
import Recommend from './Recommend'
import Attention from './Attention'
import Love from './Love'
import Liver from './Liver'
import Blood from './Blood'
import PageItem from './PageItem'
import '../style/News.css'
export default class News extends Component {
    state = {
        isShow:'block'
    }
    render() {
        let isShow = 'block'
        if(this.props.location.pathname.indexOf('article')!=-1){
                isShow='none'    
        }
        else{       
                isShow='block'       
        }
        return (
            <div >
                <div className='header' style={{display:isShow}}>
                    <NavLink to='/News/recommend' activeClassName='active'>推荐</NavLink>
                    <NavLink to='/News/attention' activeClassName='active'>关注</NavLink>
                    <NavLink to='/News/love' activeClassName='active'>关爱糖友</NavLink>
                    <NavLink to='/News/liver' activeClassName='active'>养肝护肝</NavLink>
                    <NavLink to='/News/blood' activeClassName='active'>心脑血管</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route path="/News/recommend" component={Recommend} exact></Route> 
                        <Route path="/News/attention" component={Attention} exact></Route>
                        <Route path="/News/love" component={Love} exact></Route>
                        <Route path="/News/liver" component={Liver} exact></Route>   
                        <Route path='/News/blood' component={Blood} exact></Route>
                        <Route path="/News/:type/article/:id" component={PageItem} ></Route>
                        <Redirect to='/News/recommend'/>
                    </Switch>
                    
                </div>
            </div>
            
        )
    }
}
