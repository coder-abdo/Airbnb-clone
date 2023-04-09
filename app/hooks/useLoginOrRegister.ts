import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../helpers/schema";
import { signupRequest } from "../helpers/requests";
import { SignupDto } from "../types";
const useRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupDto>({
    resolver: yupResolver(registerSchema),
  });

  const { mutate, isLoading, isSuccess } = useMutation({
    mutationFn: signupRequest,
    mutationKey: ["signup"],
  });

  return { mutate, isLoading, register, isSuccess, handleSubmit, errors };
};
export { useRegister };
