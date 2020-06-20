import React,{Component} from 'react'
import {reqLove} from '../api'
import '../style/News/Love.css'
class Love extends Component{
    state = {
        allItems:[]
    }
    componentDidMount(){
        this.getLove();
    }
    getLove = async()=>{
        const result = await reqLove();
        // console.log('love',result.data.data.datalist);
        this.setState({
            allItems:result.data.data.datalist
        })
    }
    getAllItems = ()=>{
        return this.state.allItems.map((item,index)=>{
            return (
                <div className="item" key={index}>
                        <div className='item-body'>
                            <div className='item-left'>
                                <h2 className='item-h2'>
                                   {item.title}
                                </h2>
                                <div className='item-foot'>
                                    <img src={item.healthimage}/>
                                    <span>{item.healthName}</span>
                                    <span>{item.pv}次浏览</span>
                                </div>
                            </div>
                            <div className='item-right'>
                               <img src={item.cover[0]}/>
                            </div>
                        </div>
                    </div>
                
            )
        })
    }
    render(){
        const srcImg = "https://img.jianke.com/mall/common/201804/0eae9b54a46842b5aba974d97576c492"
        
        return (
            <div className='love'>
                <div className='article-list'>
                    {this.getAllItems()}
                    </div>
            </div>
        )
    }
}
export default Love;