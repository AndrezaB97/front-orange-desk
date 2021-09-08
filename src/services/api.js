import axios from 'axios'

const api = axios.create({
  baseURL: 'https://orange-desk.herokuapp.com/api/v1/'
})

export default api
