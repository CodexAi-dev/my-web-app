const request = require('supertest');
const app = require('./app');

describe('My web app', () => {
  test('the API returns a greeting', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello from the server!');
  });

  test('the home page loads', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('<!DOCTYPE html>');
  });
});