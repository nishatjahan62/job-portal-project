import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const {
    title,
    company_logo,
    jobType,
    location,
    category,
    company,
    description,
    _id
  } = useLoaderData();

  return (
    <div className="pt-20 mx-5 lg:mx-20 pb-10">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="flex justify-center items-center gap-3">
              <img src={company_logo} alt="" />
              <h1 className="text-3xl font-bold">{title}</h1>
            </div>
            <div>
              <p>{company} </p>
              <p> located: {location}</p>
            </div>
            <p className="py-6">{description}.</p>
            <div className="flex justify-center gap-5 mb-4">
              <button className="btn btn-primary"> job Type : {jobType}</button>
              <button className="btn btn-primary">
                {" "}
                category : {category}
              </button>
            </div>

            <Link to={`/JobApply/${_id}`}>
              <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
