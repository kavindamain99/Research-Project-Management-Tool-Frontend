import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Admin/login";
import Dashboard from "./Admin/dashboard";
import UserManagement from "./Admin/userManagement";
import Student from "./Admin/roles/student";
import StudentUpdate from "./Admin/roles/studentUpdate";
import SubmissionManagement from "./Admin/submissionManagement";
import DocumentManagement from "./Admin/documentManagement";
import MarkingManagement from "./Admin/markingSchema";
import PresentationManagement from "./Admin/presentationManagement";

function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/user/management" element={<UserManagement />}></Route>
          <Route path="/user/student" element={<Student />}></Route>
          <Route path="/student/update/:id" element={<StudentUpdate />}></Route>
          <Route
            path="/document/insert"
            element={<DocumentManagement />}
          ></Route>

          <Route path="/marking/insert" element={<MarkingManagement />}></Route>
          <Route
            path="/presentation/insert"
            element={<PresentationManagement />}
          ></Route>

          <Route
            path="/student/submission"
            element={<SubmissionManagement />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Main;
