const axios = require("axios");

// Set the base URL for the API

// Define test cases using Jest
describe("API tests", () => {
  // Test case for GET request to /api/posts
  it("should return all posts", async () => {
    const response = await axios.get(`http://localhost:5000/api/v1/task`);
    expect(response.status).toBe(200);
    // expect(response.data.length).toBeGreaterThan(6);
  });
  it('should create a new post', async () => {
    const postData = {
      name: "coding",
      isCompleted: true
    };
    const response = await axios.post(`http://localhost:5000/api/v1/task`, postData);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe(postData.name);
    expect(response.data.isCompleted).toBe(postData.isCompleted);
  });

  // Test case for PUT request to /api/posts/:id
  it('should update an existing post', async () => {
    const postToUpdate = {
      title: 'Updated Test Post',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    };
    const response = await axios.put(`http://localhost:5000/api/v1/task/:645ba9a71c1c8517087a0b27`, postToUpdate);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe(postToUpdate.name);
    expect(response.data.isCompleted).toBe(postData.isCompleted);
    expect(response.data.body).toBe(postToUpdate.body);
  });

  // Test case for DELETE request to /api/posts/:id
  it('should delete an existing post', async () => {
    const response = await axios.delete(`http://localhost:5000/api/v1/task/645ba9a71c1c8517087a0b27}`);
    expect(response.status).toBe(200);
  });
});
