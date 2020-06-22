import React,{Component} from 'react'
import {reqRecommend} from '../api'
import '../style/News/Recommend.css'
class Recommend extends Component{
    state = {
        datalist:[],
        loading:false
    }
    async componentDidMount(){
        // this.state.data.datalist = await reqRecommend()
        const result = await reqRecommend();
        // console.log(result.data.data.datalist)
        // this.state.datalist = result.data.data.datalist;
        this.setState({
            datalist:result.data.data.datalist,
            loading:true
        })
    }
    goto = (id)=>{
        // console.log('goto',this)
        this.props.history.push({pathname:`/News/recommend/article/${id}`,query:{plat:'jktt-detail',typeheader:1,articleFrom:'recommends'}})
    }
    getImg = ()=>{
        const smallImgs = this.state.datalist.filter((item,index)=>index>0)
        // console.log(smallImgs)
        return smallImgs.map((item,index)=>{
            return (
                <div key={index} className="single-image">
                    <div className="smallImg" onClick={()=>{this.goto(item.articleId)}}>
                        <div className="smallImgLeft">
                                <div className="box-two-lines">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="item-foot">
                                    <img src={item.healthimage}/>
                                    <span className="health-name">{item.healthName}</span>
                                    <span className="skim">{item.pv}次浏览</span>
                                </div>
                        </div>
                        <div className="smallImgRight">
                            <img src={item.cover[0]}></img>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render(){
        if(this.state.loading){
            console.log('11')
            return (
            
                <div className='recommend'>
                    {/* <h1>关注</h1> */}
                    {console.log('111',this.state.datalist)}
                    {/* if(this.state.datalist){
                        // <img src={this.state.datalist[0].healthimage}></img>
                    } */}
                    <div className="first_image">
                        <img src={this.state.datalist[0].cover[0]} className="bigImg" onClick={()=>{this.goto(this.state.datalist[0].articleId)}}></img>
                        <div className='box-line'>
                            <h2>{this.state.datalist[0].title}</h2>
                        </div>
                    </div>
                    <div className="second_images">
                        {this.getImg()}
                    </div>
                   
                    
                </div>
            )
        }
        else{
            return (<div></div>)
        }
        // console.log('11',this.state.data.datalist)
        
    }
}
export default Recommend;