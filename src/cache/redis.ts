import { createClient } from 'redis'
import network from '../config/network'

// class for implementing cache with redis
class Cache {
  // storing redis client
  client: ReturnType<typeof createClient>

  constructor(url: string) {
    this.client = createClient({ url })
  }

  init = async (): Promise<void> => {
    await this.client.connect()
    await this.client.flushAll()
  }

  set = async (key: string, value: any): Promise<void> => {
    await this.client.set(key, value)
  }

  get = async (key: string): Promise<string> => {
    const value = await this.client.get(key)
    return value
  }

  increment = async (key: string): Promise<void> => {
    await this.client.incr(key)
  }

  exists = async (key: string): Promise<boolean> => {
    const value = await this.client.get(key)
    return !!value
  }
}

// create instance of Cache
const cache = new Cache(`redis://${network.DB_DOMAIN}:${network.REDIS_PORT}`)
export default cache
