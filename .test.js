const server = require('./server');

describe('/api/v1/task', () => {
  beforeAll(async () => {
    // Perform any asynchronous setup tasks
    await setupTask();
  });

  afterAll(async () => {
    // Perform any asynchronous teardown tasks
    await teardownTask();
  });

  it('should return a list of users', async () => {
    const response = await request(server).get('/api/v1/task');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
