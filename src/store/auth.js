import { observable, action } from 'mobx'

class AuthStore {

    @observable
    sessionUser = null;

    @action
    authenticate( user ){
        this.sessionUser = user;
    }
}

const instance = new AuthStore();
export default instance;