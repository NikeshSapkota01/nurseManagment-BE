import { object, string, array, mixed, boolean } from "yup";
import { WorkingDays } from "@constants/enums";

// the format will be something like
// {
// "firstName": "John",
// "lastName": "Doe",
// "email": "johndoe@example.com",
// "contact": "1234567890",
// "working_days": ["SUNDAY","TUESDAY"],
// "duty_start_time": "10:00:00",
// "duty_end_time": "18:00:00",
// "image": "path/to/image.jpg",
// "isRoundingManager": true
// };

export const createNurseSchema = object({
  body: object({
    firstName: string().required("firstName is required").max(128),
    middleName: string().max(128),
    lastName: string().required("lastName is required").max(128),
    email: string()
      .required("email is required")
      .email("Invalid email")
      .max(128),
    contact: string().required("contact is required").max(20),
    working_days: array().of(mixed().oneOf(Object.values(WorkingDays))),
    duty_start_time: string(),
    duty_end_time: string(),
    image: string().max(1024),
    isRoundingManager: boolean(),
  }),
});

export const updateNurseSchema = object().shape({
  firstName: string().max(128),
  middleName: string().max(128),
  lastName: string().max(128),
  email: string().email("Invalid email").max(128),
  contact: string().max(20),
  working_days: array().of(mixed().oneOf(Object.values(WorkingDays))),
  duty_start_time: string(),
  duty_end_time: string(),
  image: string().max(1024),
  isRoundingManager: boolean(),
});
