import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "1rem", background: "#eee" }}>
    <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
    <Link to="/employer">Employer Dashboard</Link>
  </nav>
);

export default Navbar;
