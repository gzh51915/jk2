import axios from 'axios'
import Phone from '../components/Phone'
export const reqRecommend = ()=>{
    return axios.get("https://jktt-api.jianke.com/m/recommends/articles?page=1&size=10")
}

export const reqAttention = ()=>{
    return axios.get("https://jktt-api.jianke.com/m/hotarticles")
}

export const reqLove = ()=>{
    return axios.get("https://jktt-api.jianke.com/m/programs/2/articles?id=2&page=1&size=10")
}

export const reqLiver = ()=>{
    return axios.get("https://jktt-api.jianke.com/m/programs/1/articles?id=1&page=1&size=10")
}

export const reqBlood = ()=>{
    return axios.get("https://jktt-api.jianke.com/m/programs/3/articles?id=3&page=1&size=10")
}

export const reqPageItem = (id)=>{
    return axios.get(`https://jktt-api.jianke.com/m/articles/${id}`)
}

export const user=(username,password)=>{
    if(password){
        return axios.post(`http://10.3.135.5:1915/api/user/login/?username=${username}&password=${password}`)
    }else{
        return axios.post(`http://10.3.135.5:1915/api/user/login/?username=${username}`)
    }
   
}

export const code=()=>{
   return  axios.post(`http://10.3.135.5:1915/api/user/code`)
}

export const reg = (username,password)=>{
    return axios.post(`http://10.3.135.5:1915/api/user/?username=${username}&password=${password}`)
}

export const getCart = ()=>{
    return axios.get(`http://10.3.135.5:1915/api/cart`)
}