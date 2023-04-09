import * as yup from "yup";
export const registerSchema = yup
  .object({
    username: yup.string().required("username is required"),
    email: yup.string().email("invalid email").required("email is required"),
    password: yup
      .string()
      .min(6, "password must be at least 6 characters")
      .required("password is required"),
  })
  .required();
