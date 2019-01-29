import axios from './axios'

export default class ApiClientService{
    static setToken( token ){
        axios.default.headers.commom['Authorization'] = `Bearer ${token}`
    }
}