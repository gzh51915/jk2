import axios from 'axios'
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