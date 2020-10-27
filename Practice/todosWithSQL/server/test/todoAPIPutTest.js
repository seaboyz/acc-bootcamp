var app = require('../server')

var supertest = require('supertest')

describe('3. PUT requests from Todo API', function () {
  it('3.1 should return HTTP status of 200 and JSON data', function () {
    let newTodo = {
      description: 'unit tests 18231337',
      isComplete: false,
    }
    supertest(app)
      .post('/todos')
      .set('Accept', 'application/json')
      .send(newTodo)
      .expect(201)
      .expect(/18231337/)
      .end(function (err, results) {
        supertest(app)
          .put('todos/' + results.body.id)
          .expect({
            description: newTodo.description,
            id: results.body._id,
            iscomplte: !newTodo.isComplete,
            user_id: 2,
          })
          .end(function () {
            console.log('test complete successfully!!')
          })
      })
  })
})
