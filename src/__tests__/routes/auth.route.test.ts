import { StatusCodes } from "http-status-codes";
import request from "supertest";
import app from "../../app";

describe("Post /refreshToken", () => {
  describe("when provide refresh token", () => {
    const refreshToken = "someRandomValue";

    // as the refresh token will be expired
    it(`should respond with a status code of (${StatusCodes.FORBIDDEN})`, async () => {
      const response = await request(app)
        .post("/api/auth/refresh")
        .send({ refreshToken });
      expect(response.statusCode).toBe(StatusCodes.FORBIDDEN);
    });
  });
});

describe("Post /login", () => {
  describe("when provide refresh token", () => {
    const user = {
      email: "nikesh@gmail.com",
      password: "Nikesh@123",
    };

    const badUser = {
      email: "unathorizedUserMail@gmail.com",
      password: "Nikesh@123",
    };

    const newData = {
      accessToken: expect.any(String),
      refreshToken: expect.any(String),
    };

    // as the refresh token will be expired
    it(`should respond with a status code of (${StatusCodes.OK})`, async () => {
      const response = await request(app).post("/api/auth/login").send(user);
      expect(response.statusCode).toBe(StatusCodes.OK);
    });

    it(`should respond with a status code of (${StatusCodes.UNAUTHORIZED})`, async () => {
      const response = await request(app).post("/api/auth/login").send(badUser);
      expect(response.statusCode).toBe(StatusCodes.UNAUTHORIZED);
    });

    it(`should specify json in the content type header`, async () => {
      const response = await request(app).post("/api/auth/login").send(user);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    it(`should respond with body`, async () => {
      const response = await request(app).post("/api/auth/login").send(user);
      expect(response.body.data).toBeDefined();
    });

    it(`should respond with body of particular format`, async () => {
      const response = await request(app).post("/api/auth/login").send(user);
      expect(response.body.data).toMatchObject(newData);
    });
  });

  describe("wheen a  email and password is missing", () => {
    it(`should respond with a status code of (${StatusCodes.BAD_REQUEST}) when only name is passed`, async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({ name: "nikesh" });
      expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
    });
    it(`should respond with a status code of (${StatusCodes.BAD_REQUEST}) when only email is passed`, async () => {
      const response = await request(app)
        .post("/api/auth/login")
        .send({ email: "nikesh@gmail.com" });
      expect(response.statusCode).toBe(StatusCodes.BAD_REQUEST);
    });
  });
});
