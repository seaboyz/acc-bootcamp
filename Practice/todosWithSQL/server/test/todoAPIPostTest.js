var app = require('../server')

var supertest = require('supertest')

describe('2. POST requests from Todo API', function () {
  it('2.1 should return HTTP status of 200 and JSON data', function (done) {
    let newTodo = {
      description: 'complete unit tests abraccadfd',
      isComplete: false,
    }
    supertest(app)
      .post('/todos')
      .set('Accept', 'application/json')
      .send(newTodo)
      .expect(201)
      .expect(/abraccadfd/, done)
  })
})
