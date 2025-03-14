// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Layout from './components/Layout/layout';
import { useTheme } from './context/ThemeContext';
import About from "./pages/About/about";
import Contact from './pages/Contact/Contact';
import Education from './pages/Educations/Education';
import Projects from './pages/Projects/Projects';
import Techstack from './pages/Techstack/Techstack';
import WorkExp from './pages/workExp/WorkExp';
import ScrollToTop from "react-scroll-to-top";
import Tada from 'react-reveal/Tada';
import MobileNav from './components/MobileNav/MobileNav';
//import { useTheme } from './context/ThemeContext';
import { ToastContainer} from 'react-toastify';

function App() {
  const {theme} = useTheme();
  return (
    <>
      <div id = {theme}>
      <ToastContainer />
        <MobileNav/>
      <Layout />
      <div className="container">
      <About/>
      <Education/>
      <Techstack/>
      <Projects/>
      <WorkExp/>
      <Contact/>
      </div>
      <div className="footer pb-3 ms-3">
        <Tada>
        <h4 className="text-center">
          Made with 😍 Techinfoyt &copy; 2023
        </h4>
        </Tada>
      </div>
      </div>
      <ScrollToTop smooth color="#f29f67" style={{backgroundColor:'#1e1e2c',borderRadius:'80px'}}/>
      
      
    </>
  )
}

export default App
