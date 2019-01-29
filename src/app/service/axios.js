const axios = require('axios')

const baseUrl = process.env.REACT_APP_BASE_API_URL

axios.create({baseUrl})

module.exports = axios