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
import GroupManagement from "./Admin/groupManagement";
import Panel from "./Admin/roles/panel";
import ManageSubmission from "./Admin/manageSubmission";
import ManageDocument from "./Admin/manageDocument";
import DocumentUpdate from "./Admin/documentUpdate";

//student route

import SignUp from "./Student/signup";
import SignIn from "./Student/signin";
import GroupRegistration from "./Student/groupRegistration";
import TopicRegistration from "./Student/topicRegistration";
import Submission from "./Student/submission";
import ResearchMaterial from "./Student/researchMaterial";
import Home from "./Student/home";

function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/user/management" element={<UserManagement />}></Route>
          <Route path="/user/student" element={<Student />}></Route>
          <Route path="/user/panel" element={<Panel />}></Route>

          <Route path="/student/update/:id" element={<StudentUpdate />}></Route>
          <Route
            path="/document/update/:id"
            element={<DocumentUpdate />}
          ></Route>

          <Route
            path="/document/insert"
            element={<DocumentManagement />}
          ></Route>

          <Route path="/marking/insert" element={<MarkingManagement />}></Route>

          <Route path="/home" element={<Home />}></Route>

          <Route path="/material" element={<ResearchMaterial />}></Route>
          <Route
            path="/presentation/insert"
            element={<PresentationManagement />}
          ></Route>

          <Route
            path="/student/submission"
            element={<SubmissionManagement />}
          ></Route>
          <Route
            path="/manage/submission"
            element={<ManageSubmission />}
          ></Route>
          <Route path="/manage/document" element={<ManageDocument />}></Route>

          <Route path="/group/manage" element={<GroupManagement />}></Route>

          {/* Student Routes */}
          <Route path="/signup" element={<SignUp />}></Route>

          <Route path="/submission" element={<Submission />}></Route>
          <Route path="/" element={<SignIn />}></Route>
          <Route
            path="/topic/registration"
            element={<TopicRegistration />}
          ></Route>

          <Route
            path="/group/registration"
            element={<GroupRegistration />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Main;
