import React, { use } from "react";
import { useLoaderData, useParams } from "react-router";
import { JobAddedByPromise } from "../../Services/AddJobApi";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  return (
    <div className="pt-28 lg:pt-30 lg:mx-20 mx-5 min-h-screen mb-10">
      <div className="bg-blue-200  p-5 rounded-2xl">
        {" "}
        <h2 className="text-center font-bold text-3xl text-blue-700 pb-4 font-[quickSand] ">
          Total Applications : {applications.length}
        </h2>
        <div className="overflow-x-auto rounded-box border  max-h-screen border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>applicant</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody key={job_id}>
              {applications.map((application, index) => (
                <tr>
                  <th className="whitespace-nowrap">{index + 1}</th>
                  <td className="whitespace-nowrap">
                    {" "}
                    {application.applicantName}
                  </td>
                  <td className="whitespace-nowrap">
                    {" "}
                    {application.applicantEmail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewApplications;
