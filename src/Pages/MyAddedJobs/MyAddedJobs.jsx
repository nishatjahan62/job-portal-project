import React, { Suspense } from "react";
import AuthHook from "../hooks/AuthHook";
import MyAddedJobList from "./MyAddedJobList";
import { JobAddedByPromise } from "../../Services/AddJobApi";

const MyAddedJobs = () => {
  const { user } = AuthHook();

  return (
    <div className="min-h-screen pt-20 mx-5 lg:mx-20">
      <Suspense fallback={"application is loading"}>
        <MyAddedJobList
          JobAddedByPromise={JobAddedByPromise(user.email)}
        ></MyAddedJobList>
      </Suspense>
    </div>
  );
};

export default MyAddedJobs;
