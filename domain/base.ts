export class Response<T> {
  success: boolean
  code: number
  message: string
  data: T

  constructor(data: T, success: boolean = false, code: number = 400, message: string = '') {
    this.success = success
    this.code = code
    this.message = message
    this.data = data
  }
}

export class Exception {
  success: boolean
  code: number
  message: string
  key: string
  errors: any[]

  constructor(errors: any[] = [], success: boolean = false, code: number = 400, message: string = '', key: string = '') {
    this.success = success
    this.code = code
    this.message = message
    this.key = key
    this.errors = errors
  }
}