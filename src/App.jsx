import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Land from './components/Land';
import About from './components/pages/About';
import Research from "./components/pages/Research";
import Blog from "./components/pages/Blog";
import Contactme from "./components/pages/Contactme";
import Home from "./components/pages/Home"


const App = () => {

  return (
    <>
      <Navbar />
      <Home />
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
