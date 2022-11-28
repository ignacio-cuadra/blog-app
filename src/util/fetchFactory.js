export default function fetchFactory({
  baseUrl,
  url,
  method,
  headers,
  body,
  isJson,
  autoBodyStringfy = false
} = {}) {
  if (url === undefined) throw new Error('url is undefined')
  if (baseUrl === undefined) baseUrl = ''
  if (headers === undefined) headers = {}
  if (method === undefined) method = 'GET'
  if (isJson) {
    if (headers['Content-Type'] || headers['Accept'])
      console.warn(
        'isJson option redeclare Content-Type and Accept headers with value "application/json"'
      )
    headers['Content-Type'] = 'application/json'
    headers['Accept'] = 'application/json'
  }

  if (autoBodyStringfy && typeof body === 'object') body = JSON.stringify(body)
  return fetch(baseUrl + url, {
    method,
    headers,
    body
  })
}
