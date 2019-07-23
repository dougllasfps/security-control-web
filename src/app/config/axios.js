import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL
export const http = axios.create({ baseURL })

export const applyToken = ( token ) => {
    http.interceptors.request.use( 
        config => {        
            config.headers['Access-Control-Allow-Credentials'] = true;     
            if (token) {            
                config.headers.Authorization = `Bearer ${token}`;     
            }        
            return config;    
    });
}

export const removeToken = () => {
    delete http.default.headers.commom['Authorization']
}

