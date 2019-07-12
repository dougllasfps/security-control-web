import { observable, action } from 'mobx'
import AuthService from '../app/service/authService';
import Messages from '../components/common/messages';
import ApiClientService from '../app/service/ApiClientService';

class AuthStore {

    authService = new AuthService();
    @observable sessionUser = null;

    @action
    login = async ( credentials ) =>{
        try{
            const response = await this.authService.auth(credentials)
            const { user, token } = response.data
            this.sessionUser = user     
            ApiClientService.setToken(token)
       }catch(error){
           if(error.response){
               Messages.error(error.response.data.message)
           }
       }        
    }

    @action 
    logout = () => {
        this.sessionUser = null;
        ApiClientService.setToken(null)
    }
}

const instance = new AuthStore();
export default instance;