import React from "react";

const ApplicationRow = ({ application, index }) => {
  const { category, title, company, company_logo, jobType, location } =
    application;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask maskSquircle h-12 w-12">
              <img src={company_logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{company} <br />
            {location}</div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>{jobType}
        <br></br>{title} 
        
        
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">{category}</button>
      </th>
    </tr>
  );
};

export default ApplicationRow;
