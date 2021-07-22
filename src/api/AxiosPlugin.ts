import axios from 'axios'

const axiosPlugin = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':
      'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
})

export default axiosPlugin
