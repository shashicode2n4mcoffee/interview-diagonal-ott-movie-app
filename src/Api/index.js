import axios from 'axios'
import { toast } from 'react-toastify'

const instance = axios.create({
  baseURL: 'https://test.create.diagnal.com',
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response) {
      const status = error.response.status
      let errorMessage = 'An error occurred.'

      switch (status) {
        case 400:
          errorMessage =
            'Bad Request: The server could not understand the request.'
          break
        case 401:
          errorMessage = 'Unauthorized: Please log in.'
          break
        case 403:
          errorMessage =
            'Forbidden: You do not have permission to access this resource.'
          break
        case 404:
          errorMessage = 'Resource not found.'
          break
        case 500:
          errorMessage =
            'Internal Server Error: Something went wrong on the server.'
          break
        case 502:
          errorMessage =
            'Bad Gateway: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.'
          break
        case 503:
          errorMessage =
            'Service Unavailable: The server is currently unavailable.'
          break
        default:
          errorMessage = 'An error occurred.'
      }

      toast.error(errorMessage)
    } else if (error.request) {
      toast.error('No response from server.')
    } else {
      toast.error('Request failed to be sent.')
    }
    return Promise.reject(error)
  }
)

export default instance
