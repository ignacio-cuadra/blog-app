import fetchToBlogApi from '../util/fetchToBlogApi'
import fetchWrapper from '../util/fetchWrapper'

export default function deletePostFetcher({ id }) {
  return fetchWrapper(
    fetchToBlogApi({
      url: `/posts/${id}`,
      method: 'DELETE'
    })
  )
}
