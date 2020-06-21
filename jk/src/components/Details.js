import React, { Component } from 'react'
// import { Route, Switch, Redirect } from 'react-router';
import { SearchOutlined, RightOutlined, StarFilled, MessageOutlined, ShoppingCartOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { InputNumber, Badge } from 'antd';
import { detailsData, detailsComments } from '../api/index'
import '../style/details/details.css'
import '../img/3.png'
import 'antd/dist/antd.css';

import store from '../store'
store.subscribe(() => {
    console.log(store.getState());

})
class details extends Component {


    onChange = (value) => {
        console.log('changed', value);
    }
    gohome = () => {
        const { history } = this.props
        console.log(this.props);
        history.push('/cart')
    }
    addCart = () => {
        store.dispatch({ type: 'ADD_TO_CART', goods: this.state.data })

    }

    state = {
        data: {},
        detailsImg: '',
        visible: false,
        evalution: '',
        evaluationItem: [],
        detalisPrice: [],
        detalisName: [],
        detalisintroduction: [],
        detalisspecifications: []
    }
    componentDidMount() {
        const { search } = this.props.location
        const num = search.substr(1)
        detailsData(num).then((res, req) => {
            // console.log('tupian',res.data.data[0].product.images[0].imageUrl)
            // const a = res.data.data[0].product.images[0].imageUrl
            // console.log(a);
            this.setState({
                detailsImg: res.data.data[0].product.images[0].imageUrl,
                detalisPrice: res.data.data[0].appPrice.price,
                detalisName: res.data.data[0].product.product.productName,
                detalisintroduction: res.data.data[0].product.product.introduction,
                detalisspecifications: res.data.data[0].product.packings[0].packing
            })
            console.log(this.state.detalisspecifications);
        })
        detailsComments().then((res, req) => {
            // console.log(res);
            this.setState({
            })
        })
    }
    componentDidUpdate() {

    }

    render() {

        return (
            <div>
                <div>
                    <header style={{ background: "#fff" }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', height: '50px', backgroundColor: '#fff', borderBottom: '1px solid #e5e5e5' }}>
                            <div style={{ fontSize: '26px', width: '24px', height: '24px', lineHeight: '24px' }} onClick={() => this.props.history.goBack()}>&lt;</div>
                            {/* <span style={{ font: 'YaHei', fontSize: '17px' }}>用户登录</span> */}
                            <div>商品</div>
                            <div>评论</div>
                            <div>详情</div>
                            <span><SearchOutlined /></span>
                            <span style={{ fontSize: '30px', width: '16px', height: '24px', lineHeight: '12px' }}>...</span>
                        </div>
                    </header>

                    <div className="detailsImageUrl">
                        <img src={this.state.detailsImg} alt="" />

                    </div>
                    {/* 顶部图片 结束---------------------------------------------------------------------------- */}

                    <div className="product-detail">
                        <div className="detailsPrice" style={{ color: "#FF4A4A", fontSize: "20px", fontWeight: "700" }}>
                            <i className="symbol" style={{ fontSize: "12px" }}>￥</i>
                            {(parseInt(this.state.detalisPrice) / 100).toFixed(2)}
                        </div>

                        <div className="product-name">
                            {this.state.detalisName}
                        </div>

                        <div style={{ height: '65.3px', marginTop: '5px' }}>
                            <img src={require('../img/3.png')} style={{ width: '351px', height: '61.5px' }} alt="" />
                        </div>

                        <div><span style={{ color: '#000000', fontSize: "13px" }}>{this.state.detalisintroduction}</span></div>
                    </div>


                    <div style={{paddingLeft:"10px",boxSizing:"border-box"}}>
                        <span style={{fontSize:"13px",color:"#999999",paddingRight:"10px"}}>规格</span>
                        <span style={{fontSize:"14px",color:"#000000"}}>{this.state.detalisspecifications}</span>
                    </div>

                    {/*  product-detail 基本详情结束--------------------------------------------------------------------- */}

                    <div style={{ paddingLeft: "8px", boxSizing: "border-box" }}>
                        <span style={{ color: "#999999", fontSize: "16px", fontWeight: "700" }}>添加商品数量 * </span>
                        <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />
                    </div>
                    {/* 添加商品------------------------------------------------------------------------------- */}


                    <div className="evalution">
                        <div className="product-evalution">
                            <div className="evaluation-head">
                                <span className="label">评价({this.state.evalution.totalCount})</span>
                                <span className="praise">
                                    好评度
                                <em>{this.state.evalution.praiseWithPercent}</em>
                                    <i><RightOutlined /></i>
                                </span>

                            </div>
                            <div className="evaluation-body">
                                <ul>
                                    {
                                        this.state.evaluationItem.map((item, index) => {
                                            return (
                                                <li className="evaluation-item" key={index}>
                                                    <div className="evaluation-item">
                                                        <div className="eva-head">
                                                            <div className="eva-name">
                                                                <img src={require('../img/4.png')} alt="" />
                                                                <p>{item.accountName}</p>
                                                                <a href="#" style={{ color: "rgb(245, 59, 16)", fontSize: "8px" }}>
                                                                    <span><StarFilled /></span>
                                                                    <span><StarFilled /></span>
                                                                    <span><StarFilled /></span>
                                                                    <span><StarFilled /></span>
                                                                    <span><StarFilled /></span>
                                                                </a>
                                                            </div>
                                                            <div className="eva-time" style={{ fontSize: "12px", color: "#999999" }}>{(new Date(item.creationDate).toLocaleString()).slice(0, 17).replace(/\//g, "-")}</div>
                                                        </div>
                                                        <div className="eva-contant">
                                                            <p className="eva-text">
                                                                {item.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 评论  结束----------------------------------------------------------------------------------------- */}

                </div>
                <div style={{ height: "48px" }}></div>

                <div className="shopping-bar">
                    <div style={{ display: "flex", height: "100%", justifyContent: "space-between" }}>
                        <div className="shopping-top" style={{ width: "50%", display: "flex" }}>
                            <div className="phone-consult-btn" style={{ width: "50%", alignItems: "center", textAlign: "center", justifyContent: "center", lineHeight: "20px" }}>
                                <MessageOutlined style={{ display: "block", color: "#999999", fontSize: "25px" }} />
                                <span style={{ display: "block", color: "#999999", fontSize: "12px" }}>咨询药师</span>
                            </div>
                            <div onClick={this.gohome} className="shopping-cart-btn" style={{ width: "50%", textAlign: "center", justifyContent: "space-between", lineHeight: "15px" }} >
                                <Badge count={9}>
                                    <ShoppingCartOutlined style={{ display: "block", color: "#999999", fontSize: "25px" }} />
                                </Badge>
                                <span style={{ display: "block", color: "#999999", fontSize: "12px" }}>购物车</span>
                            </div>
                        </div>
                        <div onClick={this.addCart} className="shopping-middle" style={{ height: "100%", width: "112.5px", textAlign: "center", background: "#fba744" }}>
                            <div className="commonBtnadd-to-cart-btn" style={{ width: "100%", height: "100%", color: "#fff", lineHeight: "41px" }}>
                                加入购物车
                            </div>
                        </div>
                        <div className="shopping-botton" style={{ height: "100%", width: "112.5px", textAlign: "center", background: "#f53b10" }}>
                            <div className="commonBtnbuy-btn" style={{ width: "100%", height: "100%", color: "#fff", lineHeight: "41px" }}>
                                立即购买
                            </div>
                        </div>
                    </div>
                </div>
                {/* 加入购物车 结束----------------------------------------------------------------------- */}
            </div>
        )
    }
}

export default details
