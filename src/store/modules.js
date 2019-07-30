import { decorate, observable, action } from "mobx";
import ModuleService from "../app/service/moduleService";
import Messages from "../components/common/messages";
import ApiClientService from "../app/service/ApiClientService";

const newModule = { 
    id: null,
    name: '' , 
    label: '' 
}

class ModuleStore {
    
    service = new ModuleService();
    list = [];
    module = newModule;

    init = () => {
        this.setList([])
        this.setModule(newModule)
    }

    onChange = (event) => {
        const { name, value } = event.target
        this.setModule({...this.module, [name]: value})
    }

    setModule = (newEntity) => {
        this.module = newEntity;
    }

    setList = (newList) => {
        this.list = newList;
    }

    load = async (id) => {
        if(!id){
            this.init();
        }else{
            try{
                const {data} = await this.service.findById(id)
                this.setModule(data)
            }catch(error){
                ApiClientService.handleError(error)
            }
        }
    }

    submit = () => {
        if(this.module.id){
            this.update();
        }else{
            this.save();
        }
    }

    save = async () => {
        try{
            const { data } = await this.service.save(this.module)
            this.setModule(data)
            Messages.success('Module saved succesfully!')
        }catch(error){
            ApiClientService.handleError(error)
        }
    }

    delete = async (id) => {
        try{
            await this.service.delete(id)
            Messages.success('Module deleted succesfully!')
        }catch(error){
            ApiClientService.handleError(error)
        }
    }

    load = async (id) => {
        try{
            const {data} = await this.service.findById(id)
            this.setModule(data)
        }catch(error){
            ApiClientService.handleError(error)
        }
    }

    update = async () => {
        try{
            await this.service.update(this.module)
            Messages.success('Module updated succesfully!')
        }catch(error){
            ApiClientService.handleError(error)
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
            ApiClientService.handleError(error)
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