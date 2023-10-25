/* eslint-disable @typescript-eslint/indent */
// import { Server } from '../node_modules/socket.io/dist/index'
import { Server } from 'socket.io'
import httpServer from './server'
import { exit } from 'process'
import network from './config/network'
import writeDeploymentVariables from './config/initVars'
import cache from './cache/redis'
import VariantDAO from './dao/variant'
import dbConnection from './db/init'
// import SocketConnectionController from './controllers/socket/connection'

export const io = new Server(httpServer, { cors: { origin: '*' } })

// eslint-disable-next-line @typescript-eslint/no-misused-promises
httpServer.listen(network.PORT, async () => {
  try {
    console.log(`API server listening on port: ${network.PORT}`)
    await dbConnection.init()
    cache.init()
    await writeDeploymentVariables()
    const print = await VariantDAO.getVariants()
    console.log(print)
  } catch (error) {
    console.log('Cannot run server! ', error)
    exit()
  }
})
io.on('connection', (socket) => {
  socket.on('python-analysis', async (socketData: string) => {})
})

console.log('listening')
