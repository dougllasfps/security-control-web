import ApiClientService from "./ApiClientService";

export default class AuthService extends ApiClientService{
    constructor(){
        super('/api/auth');
    }

    auth = ({username, password}) =>{
        return this.post({username, password})
    }

}