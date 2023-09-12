import { type Request, type Response } from 'express'
import BaseController from './base'

class PingController extends BaseController {
  static get = async (req: Request, res: Response): Promise<void> => {
    try {
      console.log(req.query)
      // throw APIError if you want to return error
      BaseController.sendHttpResponse(res, 'Success', { return: 'pong' })
    } catch (error) {
      BaseController.sendErrorResponse(res, error)
    }
  }
}

export default PingController
