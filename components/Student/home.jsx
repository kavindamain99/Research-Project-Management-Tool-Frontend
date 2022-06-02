import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";
import Navbar from "./header/navbar";
import { Container } from "react-bootstrap";
import { API } from "./config";
import axios from "axios";

export default function Home() {
  return (
    <div>
      {" "}
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Container>Home</Container>
      </div>
    </div>
  );
}
