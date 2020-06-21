import React, { useState, useEffect } from 'react'
import { getCart } from '../api'
import { ShoppingCartOutlined } from '@ant-design/icons';


function Cart(props) {
    const [cartlist, setCartlist] = useState([])

    // 点击返回首页
    function goHome() {
        console.log(props);
        const { history } = props;
        history.push("/home")
    }

    // 点击返回上一页
    function goBack() {
        window.history.go(-1)
    }

    // 点击编辑购物车
    function edit() {

    }
    // 获取购物车数据
    useEffect(() => {
        getCart().then((res, req) => {
            console.log(res.data.result[1]);
            setCartlist(res.data.result)
        })
        return
    }, [])
    console.log(cartlist);
    console.log(typeof (cartlist));

    return (
        <div>
            <header style={{ background: "#fff" }}>
                {/* <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', width: '375px', height: '50px', backgroundColor: '#fff', borderBottom: '1px solid #e5e5e5' }}> */}
                {/* <div style={{ fontSize: '26px', width: '24px', height: '24px', lineHeight: '24px' }} onClick={() => props.history.goBack()}>&lt;</div> */}
                {/* <span style={{ font: 'YaHei', fontSize: '17px' }}>用户登录</span> */}
                {/* <div style={{ fontSize: "17px", color: "#111111" }}>购物车</div> */}
                {/* <span style={{ fontSize: '17px', width: '35px', height: '24px', color: "#111111" }}>编辑</span>
                </div> */}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '30px', width: '24px', height: '24px', lineHeight: '24px' }} onClick={goBack}>&lt;</div>
                    <span style={{ font: 'YaHei', fontSize: '17px' }}>用户登录</span>
                    <div id={'btn'} style={{ fontSize: '30px', width: '11px', height: '24px', lineHeight: '12px' }} onClick={edit}>...</div>
                </div>
            </header>
            {/* 购物车顶部 --------------------------------------------------------------------------- */}

            {!cartlist ?
                <div className="no-car" style={{ overflow: "hidden", textAlign: "center", marginTop: "50px" }}>
                    <ShoppingCartOutlined style={{ fontSize: "93px", color: "#ccc", marginTop: "30px" }} />
                    <div className="tips" style={{ marginTop: "30px", fontSize: "12px", color: "999999" }}>购物车空空如也，感觉不会再爱了ㄟ( ▔, ▔ )ㄏ</div>
                    <span onClick={goHome} className="index-btn router-link-active" style={{ marginTop: "20px", fontSize: "14px", color: "#333333", width: "152px", height: "42px", border: "1px solid #ccc", display: "block", textAlign: "center", lineHeight: "42px", margin: "20px 111.5px 0" }}>随便逛逛</span>
                </div>
                :
                cartlist.map((item, index) => (
                    <div key={index} style={{ marginTop: '10px', backgroundColor: '#f5f5f5', padding: '0 10px',paddingTop:'10px' }}>
                        <div className='item-body' style={{ display: 'flex', justifyConten: 'space-around', alignItems: 'center' }}>
                            <div className='item-checkbox'><input type='checkbox' /></div>
                            <div className='item-img' style={{ width: '66.9px', padding: '4.7px' }}><img style={{ width: '55px' }} src={item.imgurl} /></div>
                            <div className='item-info' style={{ width: '244px', padding: '0 5px' }}>
                                <span style={{ fontSize: '14px' }}>{item.name}</span>
                                <p style={{ fontSize: '12px', color: '#999', margin: '0' }}>规格： {item.size}</p>
                                <span style={{ fontSize: '13px', color: '#ff6464' }}>￥ {item.price}</span>
                                <ul style={{ listStyle: 'none', display: 'flex', border: '1px solid #e5e5e5', float: "right", padding: '0', width: '72px', height: '22px' }}>
                                    <li style={{ width: '20px', textAlign: "center" }}>+</li>
                                    <li style={{ borderLeft: '1px solid #e5e5e5', borderRight: '1px solid #e5e5e5', width: '30px', textAlign: "center" }}> {item.count}</li>
                                    <li style={{ width: '20px', textAlign: "center" }}>-</li>
                                </ul>
                            </div>
                        </div>
                        <div className='item-foot' style={{ textAlign: 'right', fontSize: '12px', color: '#333' }}><span>移入收藏夹</span><span >删除</span></div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart
