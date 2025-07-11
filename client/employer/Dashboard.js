import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import JobForm from "./JobForm";

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/employer/jobs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobs(res.data);
      setError("");
    } catch (err) {
      console.error("Fetch error:", err.message);
      setError("Failed to fetch jobs. Please check your connection or login again.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Employer Dashboard</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <JobForm job={editingJob} refreshJobs={fetchJobs} />
      
      <h3>Your Jobs</h3>
      {jobs.length === 0 && <p>No jobs posted yet.</p>}
      {jobs.map((job) => (
        <div key={job._id} style={{ border: "1px solid #ccc", padding: "0.5rem", marginBottom: "0.5rem" }}>
          <h4>{job.title}</h4>
          <p>{job.description}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <button onClick={() => setEditingJob(job)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default EmployerDashboard;
