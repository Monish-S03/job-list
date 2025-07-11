import React, { useState, useEffect } from "react";
import axios from "../api/axios"; // ✅ Corrected
import { useNavigate, useLocation } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();
  const search = new URLSearchParams(useLocation().search);
  const jobId = search.get("id");

  const [job, setJob] = useState({ title: "", description: "", location: "", type: "" });

  useEffect(() => {
    if (jobId) {
      axios.get(`/jobs/${jobId}`).then((res) => setJob(res.data));
    }
  }, [jobId]);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (jobId) {
      await axios.put(`/jobs/${jobId}`, job);
    } else {
      await axios.post("/jobs", job);
    }
    navigate("/employer/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{jobId ? "Edit Job" : "Post Job"}</h2>
      <input name="title" value={job.title} onChange={handleChange} placeholder="Title" />
      <input name="location" value={job.location} onChange={handleChange} placeholder="Location" />
      <input name="type" value={job.type} onChange={handleChange} placeholder="Full-time/Part-time" />
      <textarea name="description" value={job.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Save</button>
    </form>
  );
};
export default PostJob;
