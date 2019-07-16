import { observable, action, decorate } from 'mobx'
import AuthService from '../app/service/authService';
import Messages from '../components/common/messages';
import ApiClientService from '../app/service/ApiClientService';

export class AuthStore {
    
    authService = new AuthService();
    sessionUser = null;

    login = async ( credentials ) =>{
        try{
            const response = await this.authService.auth(credentials)
            const { user, token } = response.data
            this.setSessionUser(user)     
            ApiClientService.setToken(token)
       }catch(error){
           if(error.response){
               Messages.error(error.response.data.message)
           }
       }        
    }

    logout = () => {
        ApiClientService.removeToken();
        this.setSessionUser(null)     
    }

    setSessionUser = (user) => {
        this.sessionUser = user;
    }
}

decorate(AuthStore, {
    sessionUser: observable,
    setSessionUser: action
})

const instance = new AuthStore();
export default instance;