import { type Request, type Response } from 'express'
import BaseController from './base'

class PingController extends BaseController {
  static get = async (req: Request, res: Response): Promise<void> => {
    console.log(req.query)
    BaseController.sendHttpResponse(res, 'Success', { return: 'pong' })
  }
}

export default PingController
