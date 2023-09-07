import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Stock from "./pages/Stock";

function App() {
  return (
    <div className="app">
      <Nav/>
      {/* Routes wraps around all the other individual Routes (Route) */}
      <Routes>
        {/* Tell the route the page we're routing to */}
        <Route path="/" element={<Home />} />
        {/* ^^ Main/Home page has just a slash */}
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* add a variable in your Stock route path  */}
        <Route path="/stock/:symbol" element={<Stock />} />

      </Routes>
    </div>
  );
}

export default App;

