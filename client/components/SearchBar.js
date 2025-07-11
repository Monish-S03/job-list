import React from "react";

const SearchBar = ({ filters, setFilters }) => (
  <input
    type="text"
    placeholder="Search by job title"
    value={filters.title}
    onChange={(e) => setFilters({ ...filters, title: e.target.value })}
    style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
  />
);

export default SearchBar;
