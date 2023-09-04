import app from '../src/app';
import * as supertest from 'supertest';
describe('app', () => {
  let request;
  beforeEach(() => {
    request = supertest(app);
  });
  it('should return a successful response for GET /', done => {
    request.get('/api/ping')
      .expect(200, done);
  });
});