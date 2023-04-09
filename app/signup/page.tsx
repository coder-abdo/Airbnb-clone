import { useRegister } from "../hooks/useLoginOrRegister";
import { SignupDto } from "../types";

export default function Page() {
  const { errors, handleSubmit, register, mutate, isLoading, isSuccess } =
    useRegister();
  const registerUser = (data: SignupDto) => {
    mutate(data);
  };
  return (
    <div className="py-12 h-full flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold capitalize mb-4">sign up </h1>
      <form
        onSubmit={handleSubmit(registerUser)}
        className="shadow-sm border-[1px] border-pink-400 px-4 py-2 rounded w-96 flex flex-col"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type Your Username"
            {...register("username")}
            className={`input input-bordered ${
              errors.username ? "input-error" : "input-success"
            } w-full max-w-xs focus:border-pink-700 focus:outline-none focus:shadow-none`}
          />
          {errors.username && (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errors.username.message}</span>
              </div>
            </div>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your email?</span>
          </label>
          <input
            type="email"
            placeholder="Type Your Email"
            {...register("email")}
            className={`input input-bordered ${
              errors.email ? "input-error" : "input-success"
            } w-full max-w-xs focus:border-pink-700 focus:outline-none focus:shadow-none`}
          />
          {errors.email && (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errors.email.message}</span>
              </div>
            </div>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Password?</span>
          </label>
          <input
            type="password"
            placeholder="Type Your Password"
            {...register("password")}
            className={`input input-bordered ${
              errors.password ? "input-error" : "input-success"
            } w-full max-w-xs focus:border-pink-700 focus:outline-none focus:shadow-none`}
          />
          {errors.password && (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{errors.password.message}</span>
              </div>
            </div>
          )}
        </div>
        <button className="bg-pink-700 hover:bg-pink-700 outline-none border-none btn btn-xs sm:btn-sm md:btn-md mt-2 max-w-xs w-full">
          sign up
        </button>
      </form>
    </div>
  );
}
