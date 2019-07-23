import { decorate, observable, action } from "mobx";
import ModuleService from "../app/service/moduleService";
import Messages from "../components/common/messages";

class ModuleStore{
    
    service = new ModuleService();
    list = []
    entity = {}

    setEntity = (newEntity) => {
        this.entity = newEntity;
    }

    setList = (newList) => {
        this.list = newList;
    }

    save = (module) => {
        try{
            this.service.save(module)
            Messages.success('Module saved succesfully!')
        }catch(error){
            if(error.response){
                Messages.error(error.response.data.message)
            }
        }
    }

    find = async (name) => {
        try{
            const response = await this.service.find(name)
            const { data } = response
            this.setList(data)
            if(!data.length || data.length < 1){
                Messages.warn('No result found')
            }
        }catch(error){
            if(error.response){
                Messages.error(error.response.data.message)
            }
        }
    }
}

decorate(ModuleStore, {
    list:  observable,
    setList: action,
    setEntity: action
})

const instance = new ModuleStore();
export default instance;