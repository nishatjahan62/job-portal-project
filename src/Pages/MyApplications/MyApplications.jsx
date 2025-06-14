import React, { Suspense } from "react";
import ApplicationState from "./ApplicationState";
import ApplicationList from "./ApplicationList";
import AuthHook from "../hooks/AuthHook";
import { ApplicationPromise } from "../../Services/ApplicationApi";

const MyApplications = () => {
  const { user } = AuthHook();
  return (
    <div className="min-h-screen pt-25 text-center">
      <ApplicationState></ApplicationState>
      <Suspense fallback={"application is loading"}>
        <ApplicationList
          ApplicationPromise={ApplicationPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
