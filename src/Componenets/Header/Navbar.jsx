import React, { use } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../Provider/AuthContext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user,logOut}=use(AuthContext)
const handleLogOut=()=>{
logOut().then(()=>{
      Swal.fire({
      title: "Logged Out!",
      text: "You have successfully logged Out. ",
      icon: "info",
    });
    })
    .catch((error)=>{
      toast.error(error)
    })
}
  //  NavLinks
  const NavLinks = (
    <>
      <ul className="flex items-center lg:flex-row flex-col gap-4 text-base font-[poppins] justify-center">
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-green-600 font-semibold text-lg" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/applications"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-green-600 font-semibold text-lg" : ""
          }
        >My Applications</NavLink>
       
       
      </ul>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-50 bg-blue-200 p-2 md:px-10 lg:px-10 shadow-sm font-[quickSand]">
        <div className="navbar-start ">
          <div className="dropdown block p-0">
            <div
              tabIndex={0}
              role="button"
              className="btn p-0 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  dropdown-content  bg-base-100 rounded-box  z-1 mt-3 w-45 p-2  shadow"
            >
              {NavLinks}
            </ul>
          </div>
         
        </div>
        <div className="navbar-center hidden lg:flex mx-auto">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>

        <div className="navbar-end flex gap-3 "></div>
      <div>
        {user?
 
          <div className="flex items-center gap-1">
              <div className="font-[quickSand] flex items-center px-2"> <p className="pr-2 font-semibold text-base hidden lg:block">Hello</p><p className="font-semibold text-green-800 text-lg hidden lg:block ">{user && user.displayName?.split(" ")[0]||""}</p>
             </div>
         
          <button onClick={handleLogOut} className="box-border relative z-30 inline-flex items-center justify-center w-auto px-4 py-1.5 overflow-hidden font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-300 ; rounded-lg cursor-pointer group ring-offset-2 ring-1 ring-blue-300 ring-offset-blue-200 hover:ring-offset-blue-500 ease focus:outline-none">
                <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span className="relative z-20 flex items-center text-sm">
                  <svg
                    className="relative w-5 h-5 mr-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  <div>
                    {" "}
                    <span className="text-lg">LogOut</span>
                  </div>
                </span>
              </button>
              </div> :  <Link to="/auth/Login">
          <div>
            <button className="box-border relative z-30 inline-flex items-center justify-center w-auto px-4 py-1.5 overflow-hidden font-bold text-white transition-all duration-300 bg-gradient-to-r from-green-500 to-yellow-500 ; rounded-lg cursor-pointer group ring-offset-2 ring-1 ring-green-300 ring-offset-green-200 hover:ring-offset-green-500 ease focus:outline-none">
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="relative z-20 flex items-center text-sm">
                <svg
                  className="relative w-5 h-5 mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                <div>
                  {" "}
                  <span className="text-lg">Login</span>
                </div>
              </span>
            </button>
          </div>
        </Link>}
      </div>
      </div>
    </>
  );
};

export default Navbar;
