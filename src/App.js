import TeacherDashboard from "./components/teacher/TeacherDashboard";
import { AuthenticateUser } from "./auth/auth";
import { HashRouter, Routes, Route } from "react-router-dom";
import RedirectToLogin from "./auth/RedirectToLogin";
import StudentDashboards from "./components/common/StudentDashboards";
import IndividualDashboard from "./components/student/individual-assessment/IndividualDashboard";

function App() {
  const { isAdmin, auth_error, status, decoded } = AuthenticateUser();
  const urlParams = new URLSearchParams(window.location.search);
  const assessmentId = urlParams.get("assessmentId");
  console.log("assessmentId:",assessmentId);

  return (
    <HashRouter>
      <Routes>
        {auth_error ? (
          <Route
            path="/"
            element={<RedirectToLogin error={auth_error} status={status} />}
          />
        ) : isAdmin ? (
          <Route path="/" element={<TeacherDashboard />} />
        ) : (
          <>
            <Route path="/" element={<StudentDashboards />} />
            <Route
              path="/:assessmentId"
              element={
                <IndividualDashboard
                  assessmentId={assessmentId}
                  decodedJti={decoded}
                />
              }
            />
          </>
        )}
      </Routes>
    </HashRouter>
  );
}

export default App;
