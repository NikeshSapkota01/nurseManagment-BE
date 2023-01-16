import { object, string } from "yup";

export const createUserSchema = object({
  body: object({
    name: string().required("Name is required."),
    password: string()
      .required("Password is required.")
      .min(6, "Password is too short - should be min 6 chars.")
      .max(15, "Password is too long -- should be max 15 chars")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,15}$/,
        "Password must contain at least one letter, one number, and one special character"
      ),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
  }),
});
