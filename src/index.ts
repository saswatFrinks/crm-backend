// import { Server } from '../node_modules/socket.io/dist/index'
import { Server } from 'socket.io';
import httpServer from './server'
// import SocketConnectionController from './controllers/socket/connection'

interface ServerToClientEvents {
  'trigger-rejection': (data: object) => void
  'toggle-view': (viewMode: boolean) => void
  'frontend-data-update': (data: object) => void
}

interface ClientToServerEvents {
  hello: () => void
  'python-analysis': (socketData: string) => void
}

interface InterServerEvents {
  ping: () => void
}

interface SocketData {}

export const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>()

httpServer.listen(3000)

console.log("listening")