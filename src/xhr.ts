import { AxiosRequestConfig } from './types'

export default function(config: AxiosRequestConfig) {
  const { url, method = 'get', data = null } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
