import ClientError from './errors/ClientError'
import ResponseIsNotJsonError from './errors/ResponseIsNotJsonError'
import ServerError from './errors/ServerError'

export default function fetchWrapper(service) {
  return service
    .then((response) => response.text().then((text) => ({ text, status: response.status })))
    .then(({ text, status }) => ({
      text,
      status,
      isSuccess: () => status >= 200 && status < 300,
      isClientError: () => status >= 400 && status < 500,
      isServerError: () => status >= 500 && status < 600
    }))
    .then((response) => {
      try {
        const data = JSON.parse(response.text)
        return { data, ...response }
      } catch (e) {
        throw new ResponseIsNotJsonError({ data: null, ...response })
      }
    })
    .then((response) => {
      if (response.isServerError()) throw new ServerError(response)
      if (response.isClientError()) throw new ClientError(response)
      return response
    })
}
