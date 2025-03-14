// import React from 'react';
// import './home.css';
// import Typewriter from 'typewriter-effect';
// import Resume from '../../assets/docs/resume.pdf';
// import { useTheme } from '../../context/ThemeContext'; 

// const home = () => {
// //   var X =  new Typewriter('#typewriter', {
// //     strings: ['Hello', 'World'],
// // autoStart: true,
// // });
// const [theme,setTheme] = useTheme();
//   return (
//     <>
//       <div className="container-fluid home-container" id="home">
//         <div className="theme-btn"></div>
//         <div className="container home-content">
//           <h2>Hi🖐️ I'm Abhilash. I'm a</h2>
          
//           <div id="typewriter-container">
//             <h1>
//           <Typewriter
//                 options={{
//                   strings: ['FullStack Developer!', 'DSA Enthusiast!', 'Problem Solver!'],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               /></h1>
//               <div className="home-buttons">
//                 <button className="btn btn-hire">
//                   Hire Me
//                 </button>
//                 <a className="btn btn-cv" href={Resume} download="abhilash.pdf">
//                   My Resume
//                 </a>
//               </div>
//           </div>
          
//         </div>
//       </div>
//     </>
    
//   )
// }
// {/* <TypeWriterEffect
//             textStyle={{ fontFamily: 'Red Hat Display' }}
//             startDelay={100}
//             cursorColor="black"
//             text="This is a single text"
//             typeSpeed={100}
//             scrollArea={myAppRef}
//           /> */}
// export default home;
import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/resume.pdf';
import { useTheme } from '../../context/ThemeContext'; 
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import Fade from 'react-reveal/Fade';
const Home = () => {  // Renamed to uppercase
  const {theme, setTheme} = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }
  return (
    <div className="container-fluid home-container" id="home">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === 'light' ? (<BsFillMoonStarsFill size={30}/>) : (<IoSunny size={30}/>)}
      </div>
      <div className="container home-content">
        <Fade right>
        <h2>Hi🖐️ I'm Abhilash. I'm a</h2>

        {/* <div id="typewriter-container"> */}
          <h1>
            <Typewriter
              options={{
                strings: ['FullStack Developer!', 'DSA Enthusiast!', 'Problem Solver!'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          </Fade>
          <Fade bottom>
          <div className="home-buttons">
            <a className="btn btn-hire" href="https://api.whatsapp.com/send?phone=9912384167"
            rel ="noreferrer" target="_blank">Hire Me</a>
            <a className="btn btn-cv" href={Resume} download="abhilash.pdf">
              My Resume
            </a>
          </div>
          </Fade>
        </div>
      </div>
    // </div>
  );
}

export default Home;
