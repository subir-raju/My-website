import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Education from "../Education";
import Experience from "../Experience";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";
import About from "./About";
import Blog from "./Blog";
import Research from "./Research";
import Contactme from "./Contactme";
import Land from "../Land";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      
      <div className="container">
        <Land />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactme" element={<Contactme />} />
      </Routes>
    </>
  );
};

export default App;
