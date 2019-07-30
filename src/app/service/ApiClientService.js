import  {http, applyToken , removeToken as removeHttpToken} from '../config/axios'
import Messages from '../../components/common/messages';

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

    static handleError(error){
        const { response } = error

        if(response){
            switch(response.status){
                case 400: {
                    if(Array.isArray(response.data)){
                        response.data.forEach(element => {
                            Messages.error(element)
                        });
                    }
                    break;
                }
            }
        }
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