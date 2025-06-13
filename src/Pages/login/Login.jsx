import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen  font-[quickSand] ">
        <div className="card bg-base-100 items-center max-w-sm shrink-0 shadow-2xl mt-30 lg:px-5">
          <div className="text-center font-semibold text-lg font-[poppins] pt-5">
            <h2 className="text-black text-xl">Welcome back</h2>
            <h3 className="text-green-700 text-2xl">Login your account </h3>
          </div>
          <div>
             <div
            className="flex justify-center mt-2"
          >
            <button className="btn bg-white text-black border-green-400">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
          <form className="card-body">
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label focus:border-amber-300">Email</label>
              <input
                name="email"
                type="email"
                className="input focus:border-amber-300"
                placeholder="Email"
                required
              />

              {/* password */}
              <label className="label focus:border-amber-300">Password</label>
              <input
                name="password"
                type="password"
                className="input focus:border-amber-300"
                placeholder="Password"
                required
              />

              <button
                type="submit"
                className="btn btn-neutral mt-4 bg-gradient-to-r from-green-500 to-amber-400 border-green-400 font-bold text-lg text-white"
              >
                Login
              </button>
              <div className="font-semibold text-lg text-center pt-2 ">
                <p>
                  Don't have an account?
                  <Link
                    className="font-bold text-green-700 link link-hover "
                    to="/auth/Register"
                  >
                    {" "}
                    Register
                  </Link>
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
