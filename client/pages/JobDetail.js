import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios"; // ✅ Corrected


const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`/jobs/${id}`).then((res) => setJob(res.data));
  }, [id]);

  if (!job) return <div>Loading...</div>;
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>{job.location} | {job.type}</p>
      <Link to={`/apply/${job._id}`}>Apply Now</Link>
    </div>
  );
};
export default JobDetail;