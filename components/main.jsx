import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./Admin/login";
import Dashboard from "./Admin/Dashboard";
function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Main;
