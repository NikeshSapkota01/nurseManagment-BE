import * as UserModel from "@models/Auth.model";

jest.mock("@models/Auth.model");

afterEach(() => {
  jest.clearAllMocks();
});

const id = 1;
const refresh_token = "Nikesh";

it("should call mocked database checkForRefreshToken model", () => {
  UserModel.checkForRefreshToken(refresh_token);

  expect(UserModel.checkForRefreshToken).toBeCalled();
});

it("should call mocked database findRefreshTokenByUserId model", () => {
  UserModel.findRefreshTokenByUserId(id);

  expect(UserModel.findRefreshTokenByUserId).toBeCalled();
});

it("should call mocked database insertRefreshToken model", () => {
  UserModel.insertRefreshToken(id, refresh_token);

  expect(UserModel.insertRefreshToken).toBeCalled();
});

it("should call mocked updateRefreshToken database model", () => {
  UserModel.updateRefreshToken(id, refresh_token);

  expect(UserModel.updateRefreshToken).toBeCalled();
});
