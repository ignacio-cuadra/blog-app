import fetchToBlogApi from '../util/fetchToBlogApi'
import fetchWrapper from '../util/fetchWrapper'

export default function listPostsFetcher() {
  return fetchWrapper(
    fetchToBlogApi({
      url: `/posts`
    })
  )
}
