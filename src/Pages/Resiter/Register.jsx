import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  // Validation
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const email = form.email.value;

    // Name Validation
    if (name.length < 5) {
      setNameError("Name must be at least  5 character");
      return;
    } else {
      setNameError("");
    }

    // password validation
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (password.length < 6) {
      setPasswordError("password  must be at least 6 character");
      return;
    } else if (!upperCase.test(password)) {
      setPasswordError("PassWord must contain at Least one Uppercase letter");
      return;
    } else if (!lowerCase.test(password)) {
      setPasswordError("PassWord must contain at Least one lowercase letter");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
             Swal.fire({
              title: "Created Account",
              text: "Your account has been registered successfully. ",
              icon: "success",
              draggable: true,
              confirmButtonText: "OK",
            }).then(()=>{ navigate("/")})
           ;
           
          })
          .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage, {});
      });
  };
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
            {nameError && <p className="text-error">{nameError}</p>}
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
            {passwordError && <p className="text-error">{passwordError}</p>}
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
