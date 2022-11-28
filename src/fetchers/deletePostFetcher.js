import fetchToBlogApi from '../util/fetchToBlogApi'

export default function deletePostFetcher({ id }) {
  return fetchToBlogApi({
    url: `/posts/${id}`,
    method: 'DELETE'
  }).then((response) => response.json().then((data) => ({ data, status: response.status })))
}
