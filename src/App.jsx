import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
        {/* সাইডবার অংশ */}
        <div style={{ width: "250px", flexShrink: 0 }}>
          <Sidebar />
        </div>

        {/* ডান পাশের মেইন বডি */}
        <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Navbar />
          <div style={{ flex: 1, backgroundColor: "#f8fafc" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/students"
                element={
                  <div style={{ padding: "20px" }}>
                    <h2>Student Page Coming Soon</h2>
                  </div>
                }
              />
              <Route
                path="/courses"
                element={
                  <div style={{ padding: "20px" }}>
                    <h2>Courses Page Coming Soon</h2>
                  </div>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
