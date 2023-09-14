import app from '../src/app'
import * as supertest from 'supertest'
import { sequelize } from '../src/models/init'

describe('app', () => {
  let request
  beforeEach(() => {
    request = supertest(app)
  })
  it('should return a successful response for GET /', (done) => {
    console.log(sequelize)
    request.get('/api/ping').expect(200, done)
  })
  afterAll(() => {
    sequelize.close()
  })
})
