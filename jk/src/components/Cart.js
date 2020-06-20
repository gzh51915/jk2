
import React, { Component } from 'react'
import { homeBanner } from '../api'
import {ShoppingCartOutlined } from '@ant-design/icons';





function Cart(props) {
    function goHome (){
        console.log(props);
        const {history} = props;
        history.push("/home")
    }
    return (
        <div>
            <header style={{ background: "#fff" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', width: '375px', height: '50px', backgroundColor: '#fff', borderBottom: '1px solid #e5e5e5' }}>
                    <div style={{ fontSize: '26px', width: '24px', height: '24px', lineHeight: '24px' }} onClick={() => props.history.goBack()}>&lt;</div>
                    {/* <span style={{ font: 'YaHei', fontSize: '17px' }}>用户登录</span> */}
                    <div style={{ fontSize: "17px", color: "#111111" }}>购物车</div>
                    <span style={{ fontSize: '17px', width: '35px', height: '24px', color: "#111111" }}>编辑</span>
                </div>
            </header>
            {/* 购物车顶部 --------------------------------------------------------------------------- */}




            <div className="no-car" style={{ overflow: "hidden", marginTop: "10px", textAlign: "center", marginTop: "50px" }}>
                <ShoppingCartOutlined style={{ fontSize: "93px", color: "#ccc", marginTop: "30px" }} />
                <div className="tips" style={{ marginTop: "30px", fontSize: "12px", color: "999999" }}>购物车空空如也，感觉不会再爱了ㄟ( ▔, ▔ )ㄏ</div>
                <a onClick={goHome} className="index-btn router-link-active" style={{ marginTop: "20px", fontSize: "14px", color: "#333333", width: "152px", height: "42px", border: "1px solid #ccc", display: "block", textAlign: "center", lineHeight: "42px", margin: "20px 111.5px 0" }}>随便逛逛</a></div> 







        </div>
    )
}

export default Cart
