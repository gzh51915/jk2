import React, { Component } from 'react'
import '../style/classify.css'
import { reqSort, reqList } from '../api'

class Sort extends Component {
    state = {
        list: [],
        sort: []
    }
    componentDidMount() {
        reqList().then((res, req) => {
            console.log('==((((()))))=>',res);
        })
        reqSort(191).then((res, req) => {
            console.log(res);
        })
        this.getList();//分类 
        this.getSort();
    }
    getList = async () => {
        const result = await reqList();
        this.setState({
            list: result.data.data
        })
    }
    getSort = async (id) => {
        const result = await reqSort(id||191);
        this.setState({
            sort: result.data.data
        })
    }
    getGoods = () => {
        const { sort } = this.state
        if (sort.length !== 0) {
            return (
                <ul id='goods'>
                    {
                        sort.map((item, index) => {
                            return (
                                <li key={index}>
                                  
                                    <img src={item.categoryImage}/>
                                    <p>{item.categoryName}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        }
    }
    getAllItems = () => {
        return this.state.list.map((item, index) => {
            return (
                <ul key={index}>
                    <li onClick={this.getSort.bind(this,item.id)}>
                       {item.categoryName}
                    </li>
                </ul>
        
            )
        })
    }
    render() {
        return (
            <div className="classify">
                <div className="header">
                    <a href="#">
                        <i className="goBack">&lt;</i>
                    </a>
                    <span>全部分类</span>
                    <div className="another">
                        <a href="#">
                            <i>...</i>
                        </a>
                    </div>
                </div>
                <div className="search">
                    <div className="info">
                        <i className="iconfont icon-sousuo_huaban"></i>
                        <input type="text" placeholder="补肾壮阳" />
                    </div>
                    <button className="btn">搜索</button>
                </div>
                <div className="sort">
                    <div className="content" >
                        <div className="list" >
                            {this.getAllItems()}
                        </div>
                        <div className="goods">
                            {this.getGoods()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sort;
