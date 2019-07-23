import  {http, applyToken , removeToken as removeHttpToken} from '../config/axios'

export default class ApiClientService{

    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    get = (query) => {
        return http.get(`${this.apiUrl}${query}`)
    }

    post = (object) => {
        return http.post(this.apiUrl, object)
    }

    put = (object) => {
        const {id} = object
        return http.put(`${this.apiUrl}/${id}`, object)
    }

    delete = (id) => {
        return http.delete(`${this.apiUrl}/${id}`)
    }

    static setToken( token ){
        try{
            applyToken(token)
        }catch(error){}
    }

    static removeToken(){
        try{
            removeHttpToken()
        }catch(error){}
    }

}