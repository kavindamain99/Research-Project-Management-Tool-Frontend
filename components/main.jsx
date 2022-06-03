import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Admin/login";
import Dashboard from "./Admin/Dashboard";

import { SupervisorSignUp } from "./Supervisor/signUp";
import { SupervisorSignIn } from "./Supervisor/signIn";
import { SupervisorTopics } from "./Supervisor/topics";
import { SupervisorTopic } from "./Supervisor/topic";
import SupervisorDocuments from "./Supervisor/documents";
import { StudentDocuments } from "./Supervisor/studentDocuments";
import StudentDocument from "./Supervisor/studentDocument";

import { PanelMemberSignUp } from "./PanelMember/signUp";
import { PanelMemberSignIn } from "./PanelMember/signIn";
import { PanelMemberTopics } from "./PanelMember/topics";
import { PanelMemberTopic } from "./PanelMember/topic";
import { PanelMemberReviewTopic } from "./PanelMember/revieweTopic";
import StudentPresentations from "./PanelMember/studentPresentations";
import StudentPresentation from "./PanelMember/studentPresentation";
import PanelMemberDocuments from "./PanelMember/documents";

function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={ <AdminLogin /> }></Route>
          <Route path="/dashboard" element={ <Dashboard /> }></Route>

          <Route path="/supervisor/signup" element={ <SupervisorSignUp /> }></Route>
          <Route path="/supervisor/signin" element={ <SupervisorSignIn /> }></Route>
          <Route path="/supervisor/topics" element={ <SupervisorTopics /> }></Route>
          <Route path="/supervisor/topic/:id" element={ <SupervisorTopic /> }></Route>
          <Route path="/supervisor/documents" element={ <SupervisorDocuments /> }></Route>
          <Route path="/supervisor/student/documents" element={ <StudentDocuments /> }></Route>
          <Route path="/supervisor/student/document/:id/:groupId" element={ <StudentDocument /> }></Route>

          <Route path="/panelmember/signup" element={ <PanelMemberSignUp /> }></Route>
          <Route path="/panelmember/signin" element={ <PanelMemberSignIn /> }></Route>
          <Route path="/panelmember/topics" element={ <PanelMemberTopics /> }></Route>
          <Route path="/panelmember/topic/:id" element={ <PanelMemberTopic /> }></Route>
          <Route path="/panelmember/documents" element={ <PanelMemberDocuments /> }></Route>
          <Route path="/panelmember/reviewtopic/:id" element={ <PanelMemberReviewTopic /> }></Route>
          <Route path="/panelmember/student/presentations" element={ <StudentPresentations /> }></Route>
          <Route path="/panelmember/student/presentation/:id/:groupId" element={ <StudentPresentation /> }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Main;
