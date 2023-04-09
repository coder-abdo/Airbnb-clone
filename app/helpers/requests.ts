import axios from "axios";
import { SignupDto } from "../types";
export const signupRequest = async (signupDto: SignupDto) => {
  const { data } = await axios.post("/api/signup", signupDto);
  return data;
};
