import React from "react";
import "./App.css";
import Navbar from "./components/shared/NavBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
