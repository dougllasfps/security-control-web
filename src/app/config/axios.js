import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_API_URL
const instance = axios.create({baseUrl})

export default instance;