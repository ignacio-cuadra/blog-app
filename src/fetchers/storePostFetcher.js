import fetchToBlogApi from '../util/fetchToBlogApi'

export default function storePostFetcher({ id, name, description }) {
  const body = {
    id,
    name,
    description
  }
  return fetchToBlogApi({
    url: `/posts`,
    method: 'POST',
    body: JSON.stringify(body)
  }).then((response) => response.json().then((data) => ({ data, status: response.status })))
}
