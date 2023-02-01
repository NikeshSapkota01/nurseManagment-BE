import { StatusCodes } from "http-status-codes";
import * as authService from "@services/auth.service";
import * as authController from "@controllers/auth.controller";

jest.mock("@services/auth.service");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Auth controller post /refreshToken", () => {
  const data = {
    accessToken: expect.any(String),
    refreshToken: expect.any(String),
  };

  let requestMock = {};
  let responseMock = {
    json: jest.fn(),
    status: jest.fn().mockReturnValue({
      json: jest.fn(),
    }),
  };
  let nextFunctionMock = jest.fn();

  beforeEach(() => {
    requestMock = {
      body: data,
    };
  });

  it("should call mocked checkForTokenInTable service", () => {
    authService.checkForTokenInTable(data as any);

    expect(authService.checkForTokenInTable).toBeCalled();
  });

  it(`should create new user with refreshToken`, async () => {
    (authService.checkForTokenInTable as jest.Mock).mockResolvedValueOnce(
      data.accessToken
    );

    await authController.refreshToken(
      requestMock as any,
      responseMock as any,
      nextFunctionMock as any
    );

    expect(responseMock.json).toBeCalledWith({
      data: data.accessToken,
    });
  });

  it(`should throw FORBIDDEN ${StatusCodes.FORBIDDEN} when refresh token don't match`, async () => {
    (authService.checkForTokenInTable as jest.Mock).mockRejectedValueOnce({
      status: 403,
    });

    await authController.refreshToken(
      requestMock as any,
      responseMock as any,
      nextFunctionMock as any
    );

    expect(responseMock.status).toBeCalledWith(StatusCodes.FORBIDDEN);
  });

  it(`should throw FORBIDDEN ${StatusCodes.FORBIDDEN} when refresh token don't match`, async () => {
    (authService.checkForTokenInTable as jest.Mock).mockRejectedValueOnce({
      status: 403,
    });

    await authController.refreshToken(
      requestMock as any,
      responseMock as any,
      nextFunctionMock as any
    );

    expect(responseMock.status().json).toBeCalledWith({
      message: "Refresh token doesn't match!",
    });
  });

  it(`should throw UNAUTHORIZED ${StatusCodes.UNAUTHORIZED} when refresh token don't match`, async () => {
    (authService.checkForTokenInTable as jest.Mock).mockRejectedValueOnce({
      message: "jwt expired",
    });

    await authController.refreshToken(
      requestMock as any,
      responseMock as any,
      nextFunctionMock as any
    );

    expect(responseMock.status).toBeCalledWith(StatusCodes.UNAUTHORIZED);
  });

  it(`should throw UNAUTHORIZED ${StatusCodes.UNAUTHORIZED} when refresh token don't match`, async () => {
    (authService.checkForTokenInTable as jest.Mock).mockRejectedValueOnce({
      message: "jwt expired",
    });

    await authController.refreshToken(
      requestMock as any,
      responseMock as any,
      nextFunctionMock as any
    );

    expect(responseMock.status().json).toBeCalledWith({
      message: "Token expired!",
    });
  });
});

describe("Auth controller post /login", () => {
  const data = {
    accessToken: expect.any(String),
    refreshToken: expect.any(String),
  };

  let requestMock = {};
  let responseMock = {
    json: jest.fn(),
    status: jest.fn().mockReturnValue({
      json: jest.fn(),
    }),
  };
  let nextFunctionMock = jest.fn();

  beforeEach(() => {
    requestMock = {
      body: data,
    };
  });

  it("should call mocked checkForUser service", () => {
    authService.checkForUser(data as any);

    expect(authService.checkForUser).toBeCalled();
  });

  it(`should create new access and refreshToken when login is successful`, async () => {
    (authService.checkForUser as jest.Mock).mockResolvedValueOnce(data);

    await authController.login(
      requestMock as any,
      responseMock as any,
      nextFunctionMock as any
    );

    expect(responseMock.json).toBeCalledWith({
      data: data,
    });
  });

  it(`should throw UNAUTHORIZED ${StatusCodes.UNAUTHORIZED} when login fails`, async () => {
    (authService.checkForUser as jest.Mock).mockRejectedValueOnce({
      status: 401,
    });

    await authController.login(
      requestMock as any,
      responseMock as any,
      nextFunctionMock as any
    );

    expect(responseMock.status).toBeCalledWith(StatusCodes.UNAUTHORIZED);
  });

  it(`should throw FORBIDDEN ${StatusCodes.FORBIDDEN} when refresh token don't match`, async () => {
    (authService.checkForUser as jest.Mock).mockRejectedValueOnce({
      status: 401,
    });

    await authController.login(
      requestMock as any,
      responseMock as any,
      nextFunctionMock as any
    );

    expect(responseMock.status().json).toBeCalledWith({
      message: "Please try to login with correct credentials!",
    });
  });
});
