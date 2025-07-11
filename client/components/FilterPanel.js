import React from "react";

const FilterPanel = ({ filters, setFilters }) => (
  <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
    <select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
      <option value="">All Types</option>
      <option value="Full-Time">Full-Time</option>
      <option value="Part-Time">Part-Time</option>
    </select>
    <input
      type="text"
      placeholder="Location"
      value={filters.location}
      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
    />
  </div>
);

export default FilterPanel;
