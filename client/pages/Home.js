import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({ title: "", type: "", location: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/jobs", { params: filters });
        setJobs(res.data);
        setError("");
      } catch (err) {
        console.error("Error fetching jobs:", err.message);
        setError("Could not load job listings. Check backend connection.");
      }
    };
    fetchJobs();
  }, [filters]);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Job Listings</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <SearchBar filters={filters} setFilters={setFilters} />
      <FilterPanel filters={filters} setFilters={setFilters} />
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job._id} job={job} />)
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export default Home;
