var app = require('../server')

var supertest = require('supertest')

describe('1. GET requests from Todo API', function () {
  it('1.1 should return HTTP status of 200 and JSON data', function (done) {
    supertest(app)
      .get('/todos')
      .expect('Content-Type', /json/i)
      .expect(200, done)
  })
})


