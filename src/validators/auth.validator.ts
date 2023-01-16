import { object, string } from "yup";

export const createUserSessionSchema = object({
  body: object({
    password: string().required("Password is required"),
    email: string().email("Must be valid email").required("Email is required"),
  }),
});

export const createUserTokenSchema = object().shape({
  headers: object().shape({
    authorization: string().required().label("Authorization"),
  }),
});
