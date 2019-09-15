import request from 'supertest';
import express from 'express';
//import find from './find';
const app = express();

describe('GET /customer', function() {

  const API_URL = 'http://localhost:3000';

  it('respond with json', function(done) {
    request(app)
      .get(`${API_URL}/customers`)
      //.set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

});