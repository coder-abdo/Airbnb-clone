import * as yup from "yup";
const registerSchmea = yup.object({
  username: yup.string().required("username is required"),
  email: yup.string().email("invalid emial").required("email is required"),
  password: yup
    .string()
    .min(6, "passowrd must be at least 67 characters")
    .required("passowrd is required"),
});

export { registerSchmea };
