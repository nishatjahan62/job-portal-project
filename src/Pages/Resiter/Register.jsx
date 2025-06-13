import React from "react";
import { Link } from "react-router";

const Register = () => {
    const handleRegister=(e)=>{
e.preventDefault()
const form = e.target;
 const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const email = form.email.value;
console.log(email,password,name);
    }
  return (
    <div className="flex justify-center items-center min-h-screen font-[quickSand]  ">
      <div className="card bg-base-100 items-center max-w-sm shrink-0 shadow-2xl mt-30 lg:px-5">
        <form onSubmit={handleRegister} className="card-body">
          <div className="text-center font-semibold text-lg font-[poppins]">
            <h2 className="text-black">Welcome</h2>
            <h3 className="text-green-700 text-xl">Register your account </h3>
          </div>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label focus:border-amber-300">Name</label>
            <input
              name="name"
              type="name"
              className="input focus:border-amber-300"
              placeholder="Name"
              required
            />

            {/* Photo URL */}
            <label className="label focus:border-amber-300">PHoto URL</label>
            <input
              name="photo"
              type="PhotoURL"
              className="input focus:border-amber-300"
              placeholder="PhotoURL"
              required
            />

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

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="btn btn-neutral mt-4 bg-gradient-to-r from-green-500 to-amber-400 border-green-400 font-bold text-lg text-white"
            >
              Register
            </button>
            <div className="font-semibold text-lg text-center pt-2 ">
              <p>
                Already have an account?
                <Link
                  className="font-bold text-green-700 link link-hover "
                  to="/auth/Login"
                >
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
