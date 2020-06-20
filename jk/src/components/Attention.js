import React,{Component} from 'react'
import '../style/News/Attention.css'
// import { reqRecommend } from '../api'
import {reqAttention} from '../api'
class Attention extends Component{
    state = {
        allimages:[]
    }
    componentDidMount(){
        // this.state.data.datalist = await reqRecommend()
        this.getAttention();  
        // console.log(result)
        // console.log(result.data);
        // reqAttention().then((res,req) =>{
        //     console.log("2222",res);
        // })
        
        
    }
    getAttention = async()=>{
        const result = await reqAttention();
        this.setState({
            allimages:result.data.data.datalist
         })
         console.log('111',this.state.allimages)
        // console.log(result.data.data.datalist)
        // return result.data.data.datalist
    }
    getImages = ()=>{
        return this.state.allimages.map((item,index)=>{
            return(
                <div className='all' key={index}>
                        <div className='item'>
                            <div className='item-header'>
                                <img className="img-healthid" src={item.healthimage}/>
                                    <span>{item.healthName}</span>
                                <div className="concerns-btn">
                                <span className="span-concern item-unconcerned">
                                <i>+ 关注</i>
                                </span>
                            </div>
                            </div>
                            
                            <div className="item-body">
                                <div className="box-two-lines">
                                <h2>{item.title}</h2>
                                </div>
                                {console.log(item.cover)}
                                <div className='item-image'>
                                    {
                                        item.cover.map((item,index)=>{
                                            return (
                                                <div key={index}>
                                                <img src={item}>
                                                </img>
                                                </div>
                                            )
                                        })
                                    }
                                   
                                    {/* <div >
                                        <img src={src2Img}>
                                        </img>
                                    </div>
                                    <div >
                                        <img src={src2Img}>
                                        </img>
                                    </div> */}
                                </div>
                                <div className='item-foot'>
                                    <span>{item.pv}次浏览</span>
                                    <span>{item.favourCount}个赞</span>
                                </div>
                            </div>
                        </div>
                    </div>

            )
        })
    }
    render(){
        // const srcImg = 'https://img.jianke.com/mall/common/201808/7ccc549d902f4ed79229bf6c3aac287a'
        // const src2Img = "https://img5.jianke.com/mall/jktt/201903/a0662fe0554444aa8641e255d19c182e.jpg"
        
        return (
            <div className='attention'>
                <div className="no-login-content">
                    <div className='inner'>
                        <p>登录之后才能看到关注的内容哦</p>
                        <span className='btn'>登录</span>
                    </div>
                </div>
               <div className='article-list'>
                    <div className="text-recommend-box">
                        <span className="text-recommend">为您推荐</span>
                    </div>
                    {this.getImages()}
               </div>
               
            </div>
        )
    }
}
export default Attention;