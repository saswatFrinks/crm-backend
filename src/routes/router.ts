/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import PingController from '../controller/ping'

const routes = Router()

routes.get('/ping', PingController.get)

export default routes
