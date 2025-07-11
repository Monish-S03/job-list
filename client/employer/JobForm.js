import React, { useEffect, useState } from "react";
import axios from "../api/axios";

const JobForm = ({ job, refreshJobs }) => {
  const [form, setForm] = useState({
    title: "",
    location: "",
    type: "Full-Time",
    company: "",
    description: "",
  });

  useEffect(() => {
    if (job) setForm(job);
  }, [job]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (job) {
      await axios.put(`/employer/jobs/${job._id}`, form);
    } else {
      await axios.post("/employer/jobs", form);
    }
    setForm({ title: "", location: "", type: "Full-Time", company: "", description: "" });
    refreshJobs();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <input placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} required />
      <input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
      <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
      </select>
      <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <button type="submit">{job ? "Update" : "Post"} Job</button>
    </form>
  );
};

export default JobForm;
