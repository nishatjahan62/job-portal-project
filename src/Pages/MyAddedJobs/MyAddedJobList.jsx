import React, { use } from "react";

const MyAddedJobList = ({ JobAddedByPromise }) => {
  const jobs = use(JobAddedByPromise);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Job added my me: {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>job</th>
              <th>company</th>
              <th>deadline</th>
            </tr>
          </thead>
          <tbody>
           {
            jobs.map((job,index)=><tr>
              <th>{index+1}</th>
              <td> {job.title} </td>
              <td>{job.company}</td>
              <td>{job.deadline}</td>
            </tr>)
           }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedJobList;
