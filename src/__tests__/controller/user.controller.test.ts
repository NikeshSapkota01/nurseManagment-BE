import { StatusCodes } from "http-status-codes";
import * as userService from "@services/user.service";
import * as userController from "@controllers/users.controller";

jest.mock("@services/user.service");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Post /users", () => {
  const data = {
    name: "Nikesh",
    email: "nikesh@gmail.com",
    password: "Nikesh@123",
  };

  let requestMock = {};
  let responseMock = {
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

  describe("When we try to create user", () => {
    it("should call mocked service model", () => {
      userService.addUser(data as any);

      expect(userService.addUser).toBeCalled();
    });

    it(`should create new user with status CREATED(${StatusCodes.CREATED})`, async () => {
      (userService.addUser as jest.Mock).mockResolvedValueOnce([data]);

      await userController.create(
        requestMock as any,
        responseMock as any,
        nextFunctionMock as any
      );

      expect(responseMock.status).toBeCalledWith(StatusCodes.CREATED);
    });

    it(`should create new user with message "User created successfully!"`, async () => {
      (userService.addUser as jest.Mock).mockResolvedValueOnce([data]);

      await userController.create(
        requestMock as any,
        responseMock as any,
        nextFunctionMock as any
      );

      expect(responseMock.status().json).toBeCalledWith({
        data: "User created successfully!",
      });
    });

    it(`should throw CREATED(${StatusCodes.CONFLICT} when the user already exists`, async () => {
      (userService.addUser as jest.Mock).mockRejectedValueOnce({
        code: "23505",
      });

      await userController.create(
        requestMock as any,
        responseMock as any,
        nextFunctionMock as any
      );

      expect(responseMock.status).toBeCalledWith(StatusCodes.CONFLICT);
    });

    it(`should throw throw error "User with the same email already exists`, async () => {
      (userService.addUser as jest.Mock).mockRejectedValueOnce({
        code: "23505",
      });

      await userController.create(
        requestMock as any,
        responseMock as any,
        nextFunctionMock as any
      );

      expect(responseMock.status().json).toBeCalledWith({
        data: "User with the same email already exists",
      });
    });
  });
});

describe("Get user", () => {
  const user = {
    id: 5,
    name: "Nikesh",
    email: "nikesh@gmail.com",
  };

  let requestMock = {};
  let responseMock = {
    json: jest.fn(),
  };
  let nextFunctionMock = jest.fn();

  it("should call mocked user service ", () => {
    userService.getAllUsers();

    expect(userService.getAllUsers).toBeCalled();
  });

  it("should get all users with message of 'User fetched successfully'", async () => {
    (userService.getAllUsers as jest.Mock).mockResolvedValueOnce(user);

    await userController.fetchAll(
      requestMock as any,
      responseMock as any,
      nextFunctionMock as any
    );

    expect(responseMock.json).toBeCalledWith({ data: user });
  });
});
