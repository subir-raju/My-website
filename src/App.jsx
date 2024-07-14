import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'

const App = () => {
  return (
  <>
  <Navbar />
  <Home />
  <Education />
  <Experience />
  <Skills />
  </>
  );
}

export default App;
