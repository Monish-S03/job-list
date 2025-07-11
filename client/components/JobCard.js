import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => (
  <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
    <h2>{job.title}</h2>
    <p>{job.company} | {job.location}</p>
    <p>Type: {job.type}</p>
    <Link to={`/apply/${job._id}`}>Apply</Link>
  </div>
);

export default JobCard;
