export default class ResponseIsNotJsonError extends Error {
  constructor(response) {
    super('Response Is Not Json Error')
    this.response = response
  }
}
