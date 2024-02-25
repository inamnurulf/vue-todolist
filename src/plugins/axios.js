import axios from 'axios'

import { getCookies, delCookies } from './cookies'

const baseURL = import.meta.env.VITE_BASE_URL

const baseApi = axios.create({
  baseURL
})

baseApi.interceptors.request.use(
  (config) => {
    const token = getCookies('CERT')
    if (token) config.headers.Authorization = `Bearer ${token}`
    else {
      delCookies('CERT')
      delete config.headers.Authorization
    }
    return config
  },
  (error) => {
    throw error
  }
)

baseApi.interceptors.response.use(
  (response) => {
    console.log(response.data)

    return response.data
  },
  (error) => {
    switch (error.response.data.error) {
      case 'jwt expired':
        delCookies('CERT')
        window.location.reload()
        break
      default:
        break
    }
    throw error?.response?.data ?? error
  }
)

export { baseApi }
