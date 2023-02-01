import * as NurseModel from "@models/Nurse.model";

jest.mock("@models/Nurse.model");

afterEach(() => {
  jest.clearAllMocks();
});

const userId = 1;
const nurseId = 1;
const data = {
  firstName: "John",
  lastName: "Doe",
  email: "johndoe@example.com",
  contact: "1234567890",
  working_days: ["SUNDAY", "TUESDAY"],
  duty_start_time: "10:00:00",
  duty_end_time: "18:00:00",
  image: "path/to/image.jpg",
  isRoundingManager: true,
};

it("should call mocked database fetchAllNurse model", () => {
  NurseModel.fetchAllNurse(userId);

  expect(NurseModel.fetchAllNurse).toBeCalled();
});

it("should call mocked database fetchNurse model", () => {
  NurseModel.fetchNurse(userId, nurseId);

  expect(NurseModel.fetchNurse).toBeCalled();
});

it("should call mocked database addNewNurse model", () => {
  NurseModel.addNewNurse(data);

  expect(NurseModel.addNewNurse).toBeCalled();
});

it("should call mocked checkForNurse database model", () => {
  NurseModel.checkForNurse(userId, nurseId);

  expect(NurseModel.checkForNurse).toBeCalled();
});

it("should call mocked updateNurseById database model", () => {
  NurseModel.updateNurseById(userId, data);

  expect(NurseModel.updateNurseById).toBeCalled();
});

it("should call mocked deleteNurseById database model", () => {
  NurseModel.deleteNurseById(userId, userId);

  expect(NurseModel.deleteNurseById).toBeCalled();
});
