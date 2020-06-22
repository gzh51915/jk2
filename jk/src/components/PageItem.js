import React,{Component} from 'react'
import {reqPageItem} from '../api'
import '../style/News/PageItem.css'
class PageItem extends Component{
    state = {
        title:'',
        healthId:'',
        programId:'',
        content:'',
        cover:'',
        healthName:'',
        healthimage:''
    }
    componentDidMount(){
        // console.log('12332333',this);
        this.getPageItem(this.props.location.pathname.split('/')[4]);
        // console.log(this.props.location.pathname.split('/')[4])
        // console.log(this.history.pathname.split('/')[4])
    }
    getPageItem = async(id)=>{
        const result = await reqPageItem(id);
        console.log('1111',result)
        this.setState({
            title:result.data.data.title,
            healthId:result.data.data.healthId,
            content:result.data.data.content,
            cover:result.data.data.cover[0],
            healthName:result.data.data.healthName,
            healthimage:result.data.data.healthimage
        })
    }
    render(){
        {console.log('this1',this)}
        return(
            <div>
                 <div dangerouslySetInnerHTML = {{__html:this.state.content}}></div>
                 {/* <div dangerouslySetInnerHTML = {{ __html: listdata.content}}></div> */}

                {/* <h1>{this.state.title}</h1>
                <div className='sub-title'>
                    <div>
                        <img src={this.state.healthimage} style={{width:30,height:30}}/>
                    </div>
                    <div>
                        {this.state.healthName}
                    </div>
                    <div>
                       
                    </div>
                </div> */}
            </div>
        )
    }
}
export default PageItem;