import React from "react";
import { AuthenticateUser } from "../../auth/auth";
import OverallDashboard from "../student/overall-assessment/OverallDashboard";
import IndividualDashboard from "../student/individual-assessment/IndividualDashboard";

const StudentDashboards = () => {
  const {decoded } = AuthenticateUser();
  const urlParams = new URLSearchParams(window.location.search);
  const assessmentId = urlParams.get("assessmentId");

  return (
    <>
      {assessmentId ? (
        <IndividualDashboard assessmentId={assessmentId} decodedJti={decoded} />
      ) : (
        <OverallDashboard />
      )}
    </>
  );
};

export default StudentDashboards;
