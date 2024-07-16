import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from './components/pages/About';
import Research from "./components/pages/Research";
import Blog from "./components/pages/Blog";
import Contactme from "./components/pages/Contactme";
import Home from "./components/pages/Home"


const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactme" element={<Contactme />} />
      </Routes>
    </>
  );
};

export default App;
