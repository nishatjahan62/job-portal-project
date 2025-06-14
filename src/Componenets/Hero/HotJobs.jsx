import React, { useEffect, useState } from "react";
import JobsCard from "./jobsCard";

const HotJobs = () => {
     const [jobs,setJobs]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/jobs').then(res=>res.json())
    .then(data=>setJobs(data))
    .catch(error=>console.log(error))
  },[])
 
  return (
    <div>
         <h2 className="text-3xl font bold pt-3 text-blue-600 text-center">Hot Jobs of the Day</h2>
    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 lg:mx-20 mx-5 my-10">
        
    {jobs.map(job=><JobsCard key={jobs._id } jobs={job}></JobsCard>)}

 
    </div></div>
  );
};

export default HotJobs;
