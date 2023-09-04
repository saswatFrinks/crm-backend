import { Response } from "express"

class BaseController {
  protected static sendHttpResponse = (
    res: Response,
    message: string,
    data: object = {},
    headers: string[][] = [],
    statusCode: number = 200,
    success: boolean = true
  ): void => {
    headers.length > 0 && headers.forEach((header) => {
      header.length>0 && res.setHeader(header[0], header[1])
    })
    res.status(statusCode).json({ success, message, data })
  }
}

export default BaseController