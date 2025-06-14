import React, { use } from "react";
import { ApplicationPromise } from "../../Services/ApplicationApi";
import ApplicationRow from "./ApplicationRow";

const ApplicationList = ({ ApplicationPromise }) => {
  const applications = use(ApplicationPromise);
  return (
    <div>
      <h2 className="text-4xl font-bold py-5">
        job applied : {applications.length}{" "}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>company</th>
              <th>Job</th>
            
              <th>category</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <ApplicationRow
                key={application._id}
                application={application}
                index={index}
              ></ApplicationRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
