import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Admin/login";
import Dashboard from "./Admin/Dashboard";

import { SupervisorSignUp } from "./Supervisor/signUp";
import { SupervisorSignIn } from "./Supervisor/signIn";
import { SupervisorTopics } from "./Supervisor/topics";
import { SupervisorTopic } from "./Supervisor/topic";

import { PanelMemberSignUp } from "./PanelMember/signUp";
import { PanelMemberSignIn } from "./PanelMember/signIn";
import { PanelMemberTopics } from "./PanelMember/topics";

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

          <Route path="/panelmember/signup" element={ <PanelMemberSignUp /> }></Route>
          <Route path="/panelmember/signin" element={ <PanelMemberSignIn /> }></Route>
          <Route path="/panelmember/topics" element={ <PanelMemberTopics /> }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Main;
