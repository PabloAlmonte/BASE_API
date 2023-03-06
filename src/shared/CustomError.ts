class ApiError {
  statusCode: number
  error: String
  message: String

  constructor(statusCode: number, error: String, message: String){
    this.statusCode = statusCode
    this.error = error
    this.message = message
  }
}

export default ApiError