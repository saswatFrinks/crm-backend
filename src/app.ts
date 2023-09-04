import * as express  from 'express'
// import cache from './cache/redis'
import apiRoutes from './routes/router'
// import Middleware from './middleware/middleware'

const app = express()

app.use('/api', apiRoutes)

export default app
