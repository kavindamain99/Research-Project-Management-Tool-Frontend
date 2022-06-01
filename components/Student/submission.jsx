import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import Navbar from "./header/navbar";
import { Container } from "react-bootstrap";
import { API } from "./config";

export default function Submission() {
  const [submission, setSubmission] = useState([]);

  const loadSubmission = async () => {
    const response = await fetch(`${API}/get/submission`);
    const data = await response.json();
    setSubmission(data);
    console.log(submission);
  };

  useEffect(() => {
    loadSubmission();
  }, []);

  const content = submission.map((sub) => (
    <div key={sub._id}>
      <h6>{sub.name}</h6>
      <h6>{sub.deadline}</h6>
    </div>
  ));

  return (
    <div>
      {" "}
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Container>{content}</Container>
      </div>
    </div>
  );
}
