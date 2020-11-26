import axios from 'axios'

const service = axios.create({ timeout: 5000 })

service.interceptors.request.use(
  config => config,
  error => {
    console.error('Request error: ', error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => response.data,
  error => {
    console.error('Response error: ', error)
    return Promise.reject(error)
  }
)

export default service
