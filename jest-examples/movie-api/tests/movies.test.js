const request = require('supertest');
const http = require('http');
const app = require('../src/app');

const server = http.createServer(app.callback());

describe('GET /movies/:name', () => {
  beforeAll((done) => {
    server.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return movie details for a valid movie name', async () => {
    console.log('Starting test for valid movie name');
    debugger; // Add a breakpoint here

    const response = await request(server).get('/movies/Movie1');
    console.log('Response:', response.body);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ name: 'Movie1', details: 'Details of Movie1' });

    console.log('Test for valid movie name completed');
  });

  it('should return 404 for an invalid movie name', async () => {
    console.log('Starting test for invalid movie name');
    debugger; // Add a breakpoint here

    const response = await request(server).get('/movies/InvalidMovie');
    console.log('Response:', response.body);

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Movie not found' });

    console.log('Test for invalid movie name completed');
  });
});