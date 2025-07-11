// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import JobDetail from "./pages/JobDetail";
// import Apply from "./pages/Apply";
// import EmployerDashboard from "./pages/EmployerDashboard";
// import PostJob from "./pages/PostJob";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/job/:id" element={<JobDetail />} />
//         <Route path="/apply/:id" element={<Apply />} />
//         <Route path="/employer/dashboard" element={<EmployerDashboard />} />
//         <Route path="/employer/post" element={<PostJob />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import JobDetail from "./pages/JobDetail";
// import Apply from "./pages/Apply";
// import EmployerDashboard from "./pages/EmployerDashboard";
// import PostJob from "./pages/PostJob";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/job/:id" element={<JobDetail />} />
//         <Route path="/apply/:id" element={<Apply />} />
//         <Route path="/employer/dashboard" element={<EmployerDashboard />} />
//         <Route path="/employer/post" element={<PostJob />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Dashboard from "./employer/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply/:id" element={<Apply />} />
        <Route path="/employer" element={<Dashboard />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
