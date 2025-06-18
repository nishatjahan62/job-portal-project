import React from "react";
import AuthHook from "../hooks/AuthHook";
import axios from "axios";
import Swal from "sweetalert2";

const AddJobs = () => {
  const { user } = AuthHook();

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { min, max, currency, ...restJob } = data;
    restJob.salaryRange = { min, max, currency };
    console.log(restJob);

    restJob.requirements = restJob.requirements
      .split(",")
      .map((res) => res.trim());

    restJob.responsibilities = restJob.responsibilities
      .split(",")
      .map((res) => res.trim());
    console.log(Object.keys(restJob).length);

    restJob.status="active"

    // add new job in database
    axios
      .post("http://localhost:3000/jobs", restJob)
      .then((res) => {
        console.log(res.data);
        if(res.data.insertedId){
            Swal.fire({
                         position: "top",
                        title: "Applied!",
                        text: "You have successfully  added  this job. ",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                      });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center">Add a job</h2>
      <form onSubmit={handleAddAJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Title</label>
          <input
            name="title"
            type="text"
            className="input"
            placeholder="job title"
          />

          <label className="label">Company</label>
          <input
            name="company"
            type="text"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">Company Logo</label>
          <input
            name="company_logo"
            type="url"
            className="input"
            placeholder="Company Logo url"
          />
          <label className="label">location</label>
          <input
            name="location"
            type="text"
            className="input"
            placeholder="Company location"
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input className="btn btn-square" type="reset" value="×" />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="hybrid"
              value="hybrid"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="remote"
              value="remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              aria-label="Contractual"
              value="Contractual"
            />
          </div>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select
            name="category"
            defaultValue="Select category"
            className="select"
          >
            <option disabled={true}>Select category</option>
            <option>Engineering</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">salary Range</legend>

          <label className="label">Minimum Salary</label>
          <input
            name="min"
            type="text"
            className="input"
            placeholder="Minimum salary"
          />

          <label className="label">Maximum Salary</label>
          <input
            name="max"
            type="text"
            className="input"
            placeholder="Maximum Salary"
          />

          <fieldset className="fieldset">
            <label className="label">Currency</label>
            <select
              name="currency"
              defaultValue="Select Currency"
              className="select"
            >
              <option disabled={true}>Select Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>ERR</option>
            </select>
          </fieldset>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">description</legend>

          <textarea
            name="description"
            className="textarea"
            placeholder="description"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">requirements</legend>

          <textarea
            name="requirements"
            className="textarea"
            placeholder="requirements (separate by comma)"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">responsibilities</legend>

          <textarea
            name="responsibilities"
            className="textarea"
            placeholder="responsibilities (separate by comma)"
          ></textarea>
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Info</legend>
          <label className="label">HR's Name</label>
          <input
            name="hr_name"
            type="text"
            className="input"
            placeholder="HR's Name"
            value={user.displayName}
          />
          <label className="label">HR's email</label>
          <input
            name="hr_email"
            type="text"
            className="input"
            placeholder="HR's email"
            value={user.email}
          />
        </fieldset>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Deadline</legend>

          <input name="deadline" type="date" className="input" />
        </fieldset>
        <fieldset className="fieldset">
          <button type="submit" className="btn btn-primary my-4 ">
            Add A Job
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJobs;
