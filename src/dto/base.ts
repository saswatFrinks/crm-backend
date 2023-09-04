class BaseDTO {
  constructor(json: object) {
    return Object.assign(this, json)
  }
}

export default BaseDTO
