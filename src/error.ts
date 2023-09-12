class APIError extends Error {
  readonly userMessage: string
  readonly statusCode: number

  constructor(message: string, userMessage: string, statusCode: number) {
    super()
    this.userMessage = userMessage
    this.message = message
    this.statusCode = statusCode
  }
}

export default APIError
