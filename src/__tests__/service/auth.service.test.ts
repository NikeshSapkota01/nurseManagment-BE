import * as AuthModel from "@models/Auth.model";
import * as authService from "@services/auth.service";
import * as AuthUtils from "@utils/auth";

jest.mock("@models/Auth.model");
jest.mock("@utils/auth");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Auth controller post /refreshToken", () => {
  const mockToken = {
    id: 1,
    email: "test@example.com",
    refresh_token: "refresh_token",
  };

  let requestMock = {};
  let responseMock = {
    json: jest.fn(),
    status: jest.fn().mockReturnValue({
      json: jest.fn(),
    }),
  };

  beforeEach(() => {
    requestMock = {
      body: mockToken,
    };
  });

  it("should call mocked checkForTokenInTable service", () => {
    AuthModel.checkForRefreshToken(mockToken as any);

    expect(AuthModel.checkForRefreshToken).toBeCalled();
  });
});

describe("checkForTokenInTable", () => {
  const mockToken = {
    id: 1,
    email: "test@example.com",
    refresh_token: "refresh_token",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns a rejected Promise with status code 403 when there is no token in the database", async () => {
    (AuthModel.checkForRefreshToken as jest.Mock).mockResolvedValue(null);

    try {
      await authService.checkForTokenInTable({
        body: { refreshToken: "refresh_token" },
      } as any);
    } catch (error) {
      expect(error).toEqual({ status: 403 });
    }
  });

  it("returns an access token when the refresh token is valid", async () => {
    (AuthModel.checkForRefreshToken as jest.Mock).mockResolvedValue(mockToken);
    (AuthUtils.isTokenExpired as jest.Mock).mockResolvedValue(mockToken);
    (AuthUtils.generateAccessToken as jest.Mock).mockResolvedValue(
      "access_token"
    );

    const result = await authService.checkForTokenInTable({
      body: { refreshToken: "refresh_token" },
    } as any);

    expect(result).toEqual({ accessToken: "access_token" });
    expect(AuthModel.checkForRefreshToken).toHaveBeenCalledWith(
      "refresh_token"
    );
    expect(AuthUtils.isTokenExpired).toHaveBeenCalledWith("refresh_token");
    expect(AuthUtils.generateAccessToken).toHaveBeenCalledWith({
      id: 1,
      email: "test@example.com",
    });
  });
});
