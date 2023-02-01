import { StatusCodes } from "http-status-codes";
import request from "supertest";
import app from "../../app";

// we will doing end to end testing here

describe("check if server is running", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/api")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("returns 404 Not Found error when going to non-implemented route", (done) => {
    request(app).get("/not-implemented").expect(404, done);
  });
});

describe("Post /users", () => {
  describe("given a name, email and password", () => {
    // should save the username and password to the database
    // should respond with a json object conating the user id

    const user = {
      name: "Nikesh",
      email: "nikesh@gmail.com",
      password: "Nikesh@123",
    };

    it(`should respond with a status code of (${StatusCodes.CONFLICT})`, async () => {
      const response = await request(app).post("/api/users").send(user);
      expect(response.statusCode).toBe(StatusCodes.CONFLICT);
    });

    it(`should specify json in the content type header`, async () => {
      const response = await request(app).post("/api/users").send(user);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    it(`should respond with body`, async () => {
      const response = await request(app).post("/api/users").send(user);
      expect(response.body.data).toBeDefined();
    });
  });

  describe("wheen a name, email and password is missing", () => {
    it(`should respond with a status code of (${StatusCodes.BAD_REQUEST}) when only name is passed`, async () => {
      const response = await request(app)
        .post("/api/users")
        .send({ name: "nikesh" });
      expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
    });
    it(`should respond with a status code of (${StatusCodes.BAD_REQUEST}) when only email is passed`, async () => {
      const response = await request(app)
        .post("/api/users")
        .send({ email: "nikesh@gmail.com" });
      expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
    });
    it(`should respond with a status code of (${StatusCodes.BAD_REQUEST}) when only password is passed`, async () => {
      const response = await request(app)
        .post("/api/users")
        .send({ password: "Nikesh@123" });
      expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
    });
    it(`should respond with a status code of (${StatusCodes.BAD_REQUEST}) when only name, password is passed`, async () => {
      const response = await request(app)
        .post("/api/users")
        .send({ name: "nikesh", password: "Nikesh@123" });
      expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
    });
    it(`should respond with a status code of (${StatusCodes.BAD_REQUEST}) when only name, email is passed`, async () => {
      const response = await request(app)
        .post("/api/users")
        .send({ name: "nikesh", email: "nikesh@gmail.com" });
      expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
    });
    it(`should respond with a status code of (${StatusCodes.BAD_REQUEST}) when only email, password is passed`, async () => {
      const response = await request(app)
        .post("/api/users")
        .send({ email: "nikesh@gmail.com", password: "Nikesh@123" });
      expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
    });
  });
});
