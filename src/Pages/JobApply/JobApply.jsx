import React from "react";
import { Link, useParams } from "react-router";
import AuthHook from "../hooks/AuthHook";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = AuthHook();

  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const linkedin = form.linkedin.value;
    const dribble = form.dribble.value;
    const application = {
      jobId,
      applicantName: name,
     applicantEmail: email,
      dribble,
      linkedin,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
             position: "top",
            title: "Applied!",
            text: "You have successfully  Applied for this job. ",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pt-25 pb-10 flex flex-col gap-5 justify-center min-h-screen items-center">
      <h2 className="text-4xl">
        Apply For{" "}
        <Link to={`/jobs/${jobId}`}>
          <span className="text-blue-600 link">this job</span>
        </Link>{" "}
      </h2>
      <form onSubmit={handleJobApply}>
        {" "}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Fill the form with your information.</label>
          <input
            name="name"
            type="text"
            defaultValue={user.displayName}
            className="input"
            placeholder="Name"
          />

          <label className="label"></label>
          <input
            name="email"
            type="email"
            defaultValue={user.email}
            className="input"
            placeholder="email"
          />

          <input
            name="linkedin"
            type="url"
            className="input"
            placeholder="Linkedin id"
          />

          <label className="label"></label>
          <input
            name="dribble"
            type="url"
            className="input"
            placeholder="Dribble account link"
          />

          <button type="submit" className="btn btn-primary mt-4">
            Apply
          </button>
        </fieldset>{" "}
      </form>
    </div>
  );
};

export default JobApply;
