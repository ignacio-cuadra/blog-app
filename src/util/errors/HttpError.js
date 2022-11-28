export default class HttpError extends Error {
  constructor(response) {
    super('Http Error')
    this.response = response
  }
}
