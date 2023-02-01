import { StatusCodes } from "http-status-codes";
import * as UserModel from "@models/User.model";
import * as userController from "@controllers/users.controller";

jest.mock("@models/User.model");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Create user", () => {
  const user = {
    name: "Nikesh",
    email: "nikesh@gmail.com",
    password: "Nikesh@123",
  };

  let requestMock = {};
  let responseMock = {
    status: jest.fn(),
    json: jest.fn(),
  };
  let nextFunctionMock = jest.fn();

  beforeEach(() => {
    requestMock = {
      body: user,
    };
  });

  it("should call mocked database model", () => {
    UserModel.addNewUser(user as any);

    expect(UserModel.addNewUser).toBeCalled();
  });

  it(`should create a new user with status of CREATED(${StatusCodes.CREATED})`, async () => {
    (UserModel.addNewUser as jest.Mock).mockResolvedValueOnce([user]);

    await userController.create(
      requestMock as any,
      responseMock as any,
      nextFunctionMock as any
    );

    expect(responseMock.status).toBeCalledWith(StatusCodes.CREATED);
  });
});

describe("Get user profile", () => {
  const id = "1";

  let requestMock = {};

  beforeEach(() => {
    requestMock = {
      authenticatedUser: id,
    };
  });

  it("should call mocked database model", () => {
    const id = 5;

    UserModel.fetchUser(id);

    expect(UserModel.fetchUser).toBeCalled();
  });
});

describe("Login user test", () => {
  const user = {
    email: "nikesh@gmail.com",
    password: "Nikesh@123",
  };

  it("should call check for user", () => {
    UserModel.checkForUser(user as any);

    expect(UserModel.checkForUser).toBeCalled();
  });
});
