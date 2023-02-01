import jwt from "jsonwebtoken";
import { generateAccessToken } from "@utils/auth";

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn().mockReturnValue("access-token"),
}));

process.env.ACCESS_TOKEN_SECRET = "secret";

describe("Util/AuthUtil generateAccessToken", () => {
  it("should expire in 1hr", () => {
    const data = { id: 1, email: "test@example.com" };
    generateAccessToken(data);

    expect(jwt.sign).toHaveBeenCalledWith(data, "secret", { expiresIn: "1hr" });
  });

  it("should generate an access token", () => {
    const data = { id: 1, email: "test@example.com" };
    const result = generateAccessToken(data);

    expect(result).toEqual("access-token");
  });
});
