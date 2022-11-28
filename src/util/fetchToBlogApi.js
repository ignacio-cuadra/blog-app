import fetchFactory from './fetchFactory'
const BASE_URL = process.env.REACT_APP_BASE_API_URL

export default function fetchToBlogApi({ url, method, body }) {
  return fetchFactory({
    baseUrl: BASE_URL,
    isJson: true,
    url,
    method,
    body,
    autoBodyStringfy: true
  })
}
