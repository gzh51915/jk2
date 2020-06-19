import axios from 'axios'
import Phone from '../components/Phone'

export const user=(username,password)=>{
    if(password){
        return axios.post(`http://10.3.135.46:1915/api/user/login/?username=${username}&password=${password}`)
    }else{
        return axios.post(`http://10.3.135.46:1915/api/user/login/?username=${username}`)
    }
   
}

export const code=()=>{
   return  axios.post(`http://10.3.135.46:1915/api/user/code`)
}

export const reg = (username,password)=>{
    return axios.post(`http://10.3.135.46:1915/api/user/?username=${username}&password=${password}`)
}