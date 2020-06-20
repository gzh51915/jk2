import axios from 'axios'

export const homeBanner = () => {
    return axios.get('http://10.3.135.46:1915/api/home')
}
// import axios from 'axios'

// export const homeBanner=()=>{
//     return axios.get('https://fe-wcgi.jianke.com/v2/homepage?type=home&platform=mobile')
// }

export const detailsData = () => {
    return axios.get('https://wcgi.jianke.com/details/api/mobile/evaluates/339627?page=1&size=10&productCode=339627')
}