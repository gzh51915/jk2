import React, { Component } from 'react'

import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import '../style/home/home.css'
import Swiper from 'swiper';
import 'swiper/css/swiper.css'
import { withRouter,} from 'react-router-dom';

// import axios from 'axios'
import { homeBanner } from '../api';

class Home extends Component {
    // constructor(props) {
    //     super(props)
    // }
    state = {
        BoxBanner: [],
        floorName: [],
        announcement: [],
        select: [],
        imgBox: [],
        prosmalist: [],
        imgBoxtwo: [],
        imgBoxthree: [],
        imgBoxfour: [],
        imgBoxfive: [],
        imgBoxsix: [],
        imgBoxseven: [],
        imgBoxnine: [],
        imgBoxten: [],
        recommendList: [],
        // _id:Date.parse(new Date())
    }
    gotoDetails = (productCode) => {
        const { history } = this.props
        console.log(this.props,productCode);
        history.push('/details?' + productCode);
    }

    componentDidMount() {
        homeBanner().then((res, req) => {
            // console.log('11', res.data[18].rooms[0].headImg);
            this.setState({
                BoxBanner: res.data.data[0].rooms,
                floorName: res.data.data[1].rooms,
                announcement: res.data.data[2].rooms,
                select: res.data.data[3].rooms[0].headImg,
                imgBox: res.data.data[4].rooms,
                prosmalist: res.data.data[5].rooms,
                imgBoxtwo: res.data.data[6].rooms[0].headImg,
                imgBoxthree: res.data.data[7].rooms[0].headImg,
                imgBoxfour: res.data.data[8].rooms,
                imgBoxfive: res.data.data[9].rooms,
                imgBoxsix: res.data.data[10].rooms,
                imgBoxseven: res.data.data[11].rooms,
                imgBoxeight: res.data.data[12].rooms[0].headImg,
                imgBoxnine: res.data.data[13].rooms,
                imgBoxten: res.data.data[14].rooms,
                imgBoxeleven: res.data.data[15].rooms[0].headImg,
                imgBoxtwelve: res.data.data[16].rooms[0].headImg,
                recommendList: res.data.data[17].rooms,
                imgBoxlast: res.data.data[18].rooms[0].headImg,
                // _id:res.data[17].rooms._id
            })
            // console.log('22', res.data[17].rooms);
        })
    }
    componentDidUpdate() {
        new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
        })
        new Swiper('.swiper-container1', {
            direction: 'vertical',
            loop: true,
            autoplay: {
                disableOnInteraction: false,
                delay: 600
            },
        })

    }


    render() {
        return (
            <div>
                <div className="HomeTop">
                    {/* <div className="op"></div> */}
                    <div className="searchmodule">
                        <div className="info">安键</div>
                        <div className="info-bar">
                            <i className="icon-search"><SearchOutlined className="i-UserOutlined" /></i>
                            <input type="text" placeholder="金戈20片券后369送好礼" />
                        </div>
                        <div className="info-login"><i className="icon-person"><UserOutlined /></i></div>
                    </div>
                </div>

                {/* ---------------------头部 HomeTop 结束 ------------------------------------------------- */}

                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.BoxBanner.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <img src={item.headImg} alt="" />
                                    </div>
                                )
                            })

                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                {/* ----------------- Boxbanner结束----------------------------------------------------------- */}
                <div>
                    <ul className="floorul">
                        {
                            this.state.floorName.map((item, index) => {
                                return (
                                    <li className="floorli" key={index}>
                                        <img src={item.headImg} alt="" />
                                        <span>{item.roomTitle}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/* floorName 结束------------------------------------------------------------------------------- */}
                <ul className="jktt-box">
                    <div className="jktt-img"><img src={require("../img/1.png")} alt="" /></div>
                    <div className="swiper-container1">
                        <div className="swiper-wrapper">
                            {
                                this.state.announcement.map((item, index) => {
                                    return (
                                        <div className="swiper-slide" key={index}>
                                            <li className="announcement-li">
                                                <span className="jktt-type">文章</span>
                                                {item.roomTitle}
                                            </li>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </ul>

                {/* jktt-box 头条 结束--------------------------------------------------------------------------*/}

                <div className="select">
                    <img src={this.state.select} alt="" />
                </div>
                {/* select 精选 结束--------------------------------------------------------------------------- */}


                <div className="imgs-box">
                    <div className="img-left">
                        {this.state.imgBox.map((item, index) => {
                            return (
                                index > 0 ? <img src={item.headImg} key={index} style={{ width: "vw(187.5)", height: "105px", float: "left" }} alt="" /> :
                                    <img src={item.headImg} key={index} style={{ width: "vw(187.5)", height: "210px", float: "left" }} alt="" />
                            )
                        })}
                    </div>
                    <div className="img-right"></div>
                </div>
                {/* imgs-box 结束------------------------------------------------------------------------ */}

                <div className="pro-sma-list">
                    {
                        this.state.prosmalist.map((item, index) => {
                            // console.log(item);
                            return (
                                <div className="item" key={index}>
                                    <img src={item.headImg} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                {/* pro-sma-list 结束-------------------------------------------------------------------- */}
                <div className="img-box">
                    <img src={this.state.imgBoxtwo} alt="" />
                </div>
                {/* img-boxtwo 结束------------------------------------------------------------------------ */}

                <div className="img-boxthree">
                    <img src={this.state.imgBoxthree} alt="" />
                </div>
                {/*  img-boxthree 结束--------------------------------------------------------------------- */}

                <div className="imgBoxfour">
                    {
                        this.state.imgBoxfour.map((item, index) => {
                            return (
                                <div className="pro-picfour" key={index}>
                                    <img src={item.headImg} alt="" />
                                </div>
                            )
                        })
                    }
                </div>

                {/* imgBoxfour 结束-----------------------------------------------------------------------0- */}
                <div className="imgBoxfive">
                    {
                        this.state.imgBoxfive.map((item, index) => {
                            return (
                                <div className="pro-picfive" key={index}>
                                    <img src={item.headImg} alt="" />
                                </div>
                            )
                        })
                    }
                </div>

                {/* imgBoxfive 结束 -------------------------------------------------------------------------*/}

                <div className="imgBoxsix">
                    {
                        this.state.imgBoxsix.map((item, index) => {
                            return (
                                <div className="pro-picsix" key={index}>
                                    <img src={item.headImg} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                {/* imgBoxsix 结束- ------------------------------------------------------------------------- */}
                <div className="imgBoxseven">
                    {
                        this.state.imgBoxseven.map((item, index) => {
                            return (
                                <div className="pro-picseven" key={index}>
                                    <img src={item.headImg} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                {/* imgBoxseven 结束 ---------------------------------------------------------------------------*/}

                <div className="imgBoxeight">
                    <img src={this.state.imgBoxeight} alt="" />
                </div>


                {/* imgBoxeight 结束 ---------------------------------------------------------------------------*/}
                <div className="imgBoxnine">
                    {
                        this.state.imgBoxnine.map((item, index) => {
                            return (
                                <div className="pro-picnine" key={index}>
                                    <img src={item.headImg} alt="" />
                                </div>
                            )
                        })
                    }
                </div>



                {/* imgBoxnine 结束 ---------------------------------------------------------------------------*/}

                <div className="imgBoxten">
                    {
                        this.state.imgBoxten.map((item, index) => {
                            return (
                                <div className="pro-picten" key={index}>
                                    <img src={item.headImg} alt="" />
                                </div>
                            )
                        })
                    }
                </div>


                {/* imgBoxten 结束 ---------------------------------------------------------------------------*/}
                <div className="imgBoxeleven">
                    <img src={this.state.imgBoxeleven} alt="" />
                </div>


                {/* imgBoxeleven 结束 ---------------------------------------------------------------------------*/}

                <div className="imgBoxtwelve">
                    <img src={this.state.imgBoxtwelve} alt="" />
                </div>
                {/* imgBoxtwelve 结束 ------------------------------------------------------------------------ */}


                <div className="recommendList">
                    {
                        this.state.recommendList.map((item, index) => {
                            return (
                                <div className="rl-item" key={index} onClick={this.gotoDetails.bind(this,item.productCode)}>
                                    <img className="rl-pic" src={item.productImageUrl} alt="" />
                                    <div className="rl-text">
                                        <span className="name">{item.productName}</span>
                                        {
                                            <span className="info">{item.info}</span> ? <span className="info">{item.info}</span> : <span></span>
                                        }
                                        <span className="price">
                                            <em>￥</em>
                                            {item.promotionPrice.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                {/* recommendList 结束---------------------------------------------------------------------*/}

                <div className="imgBoxlast">
                    <img src={this.state.imgBoxlast} alt="" />
                </div>

                {/* imgBoxlast 结束 ----------------------------------------------------------------------- */}
            </div>

        )
    }
}
export default withRouter(Home)
