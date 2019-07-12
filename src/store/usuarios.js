import { observable } from 'mobx'

class UsuariosStore {

    @observable
    usuario = {}
}

const instance = new UsuariosStore();
export default instance;