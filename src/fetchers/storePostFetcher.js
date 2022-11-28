import fetchToBlogApi from '../util/fetchToBlogApi'
import fetchWrapper from '../util/fetchWrapper'

export default function storePostFetcher({ id, name, description }) {
  const body = {
    id,
    name,
    description
  }
  return fetchWrapper(
    fetchToBlogApi({
      url: `/posts`,
      method: 'POST',
      body: JSON.stringify(body)
    })
  )
}
