import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

const Apply = () => {
  const { id } = useParams();
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("resume", resume);
    await axios.post(`/jobs/${id}/apply`, formData);
    alert("Application submitted!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <h2>Upload Resume</h2>
      <input type="file" onChange={(e) => setResume(e.target.files[0])} required />
      <button type="submit" style={{ marginLeft: "1rem" }}>Submit</button>
    </form>
  );
};

export default Apply;
