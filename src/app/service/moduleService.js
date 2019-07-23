import ApiClientService from "./ApiClientService";

export default class ModuleService extends ApiClientService{

    constructor(){
        super('/api/modules');
    }

    find = name =>{
        return this.get(`?name=${name}`);
    }

    save = module => {
        return this.post(module);
    }

    update = module => {
        return this.put(module);
    }

    delete = id => {
        return this.delete(id)
    }

}