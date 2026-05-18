const request = require("supertest");
const app = require("../../src/app");

describe("Notes API integration", () => {
  test("POST /api/notes should create a note and return 201", async () => {
    const response = await request(app)
      .post("/api/notes")
      .send({ title: "Test Note", content: "This is valid test content" });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe("Test Note");
  });

  test("GET /api/notes should return all notes with 200", async () => {
    const response = await request(app).get("/api/notes");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
