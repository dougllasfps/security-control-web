import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_API_URL
const instance = axios.create({ baseURL })

export default instance;