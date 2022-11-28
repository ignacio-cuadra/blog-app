import fetchToBlogApi from '../util/fetchToBlogApi'

export default function listPostsFetcher() {
  return fetchToBlogApi({
    url: `/posts`
  }).then((response) => response.json().then((data) => ({ data, status: response.status })))
}
