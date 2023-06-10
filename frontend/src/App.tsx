import React from "react";
import "./App.css";
import Navbar from "./components/shared/NavBar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
