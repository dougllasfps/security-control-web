import { decorate, observable, action } from "mobx";
import ModuleService from "../app/service/moduleService";
import Messages from "../components/common/messages";

const newModule = { name: '' , label: '' }

class ModuleStore {
    
    service = new ModuleService();
    list = []
    module = newModule

    init = () => {
        this.setList([])
        this.setModule(newModule)
    }

    setName = (name) => {
        this.setModule({...this.module, name})
    }

    setLabel = (label) => {
        this.setModule({...this.module, label})
    }

    setModule = (newEntity) => {
        this.module = newEntity;
    }

    setList = (newList) => {
        this.list = newList;
    }

    save = async (module) => {
        try{
            const { data } = await this.service.save(module)
            this.setModule(data)
            Messages.success('Module saved succesfully!')
        }catch(error){
            this.service.handleError(error)
        }
    }

    delete = async (id) => {
        try{
            await this.service.delete(id)
            Messages.success('Module deleted succesfully!')
        }catch(error){
            this.service.handleError(error)
        }
    }

    load = async (id) => {
        try{
            const {data} = await this.service.findById(id)
            this.setModule(data)
        }catch(error){
            this.service.handleError(error)
        }
    }

    update = async (module) => {
        try{
            await this.service.update(module)
            Messages.success('Module updated succesfully!')
        }catch(error){
            this.service.handleError(error)
        }
    }

    find = async (name) => {
        try{
            const { data } = await this.service.find(name)
            this.setList(data)
            if(!data.length || data.length < 1){
                Messages.warn('No result found')
            }
        }catch(error){
            this.service..handleError(error)
        }
    }
}

decorate(ModuleStore, {
    module: observable,
    list:  observable,
    setList: action,
    setModule: action,
})

const instance = new ModuleStore();
export default instance;