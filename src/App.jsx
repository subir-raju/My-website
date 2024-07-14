import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
    useEffect(() => {
      Aos.init();
    }, []);
  return (
  <>
  <Navbar />
  <Home />
  <Education />
  <Experience />
  <Skills />
  <Projects />
  <Contact />
  </>
  );
}

export default App;
