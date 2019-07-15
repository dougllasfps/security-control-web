import axios from '../config/axios'

export default class ApiClientService{

    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    get = (query) => {
        return axios.get(`${this.apiUrl}${query}`)
    }

    post = (object) => {
        return axios.post(this.apiUrl, object)
    }

    put = (object) => {
        const {id} = object
        return axios.put(`${this.apiUrl}/${id}`, object)
    }

    delete = (id) => {
        return axios.delete(`${this.apiUrl}/${id}`)
    }

    static setToken( token ){
        try{
            axios.default.headers.commom['Authorization'] = `Bearer ${token}`
        }catch(error){}
    }

    static removeToken(){
        try{
            axios.default.headers.commom['Authorization'] = null
        }catch(error){}
    }
}