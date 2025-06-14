import React from "react";
import { Link } from "react-router";

const JobsCard = ({ jobs }) => {
  const {
    company_logo,
    title,
    jobType,
    location,
    category,
    company,
    description,
    _id,
  } = jobs;
  return (
    <div className="">
      <div className="card bg-blue-50  shadow-sm lg:w-96 lg:h-90 pt-5">
        <div className="flex justify-center items-center">
          <figure>
            <img className="w-20 h-20" src={company_logo} alt="Shoes" />
          </figure>
           <p className="font-bold text-2xl gap-2">{company} </p>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{category}</div>
          </h2>

          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline"> {jobType} </div>
            <div className="badge badge-outline"> {location} </div>
          </div>
          <Link to={`/jobs/${_id}`}>
            <div className="card-actions justify-end pt-2">
              <button className="btn btn-primary"> view details</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
