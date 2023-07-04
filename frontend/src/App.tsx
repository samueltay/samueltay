import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/nav_bar/NavBar";
import Home from "./pages/home/Home";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Research from "./pages/research/Research";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not_found/NotFound";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScreenSizeProvider } from "./components/screen_size/ScreenSizeContext";
import Footer from "./components/footer/Footer";

function App() {
  const [funMode, setFunMode] = useState(false);

  const handleFunModeToggle = (funMode: boolean) => {
    setFunMode(funMode);
    // Perform any fun-mode related actions here
    if (funMode) {
      document.body.style.cursor =
        "url('favicons/robot_favicon/favicon-16x16.png'), auto";
    } else {
      document.body.style.cursor = "default";
    }
  };

  return (
    <Router>
      <ScreenSizeProvider>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer onFunModeToggle={handleFunModeToggle} />
      </ScreenSizeProvider>
    </Router>
  );
}

export default App;
