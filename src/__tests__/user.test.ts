import { StatusCodes } from "http-status-codes";
import * as userController from "@controllers/users.controller";
import * as UserModel from "@models/User.model";

jest.mock("@models/User.model");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Create user", () => {
  const data = {
    name: "Nikesh",
    email: "nikesh2@gmail.com",
    password: "Nikesh@123",
  };

  let requestMock = {};
  let responseMock = {
    status: jest.fn(),
    send: jest.fn(),
  };
  let nextFunctionMock = jest.fn();

  beforeEach(() => {
    requestMock = {
      body: data,
    };
  });

  it("should call mocked database model", () => {
    UserModel.addNewUser(data as any);

    expect(UserModel.addNewUser).toBeCalled();
  });

  it(`should create a new user with status of CREATED(${StatusCodes.CREATED})`, async () => {
    (UserModel.addNewUser as jest.Mock).mockResolvedValueOnce([data]);

    await userController.create(
      requestMock as any,
      responseMock as any,
      nextFunctionMock as any
    );

    expect(responseMock.status).toBeCalledWith(StatusCodes.CREATED);
  });
});
