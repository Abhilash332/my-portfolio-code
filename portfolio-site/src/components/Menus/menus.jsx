// import React from 'react'
// import "./menus.css";
// import { FcHome } from "react-icons/fc";
// import myPic from '../../assets/mypic.jpg';
// import { FcAbout } from "react-icons/fc";
// import { FcPortraitMode } from "react-icons/fc";
// import { FcBiotech } from "react-icons/fc";
// import { FcReading } from "react-icons/fc";
// import { FcVideoProjector } from "react-icons/fc";
// import { FcVoicePresentation } from "react-icons/fc";
// import { FcBusinessContact } from "react-icons/fc";
// import { Link} from 'react-scroll';

// const Menus = ({toggle}) => {
//   return (
//     <>
//         {toggle ? (
//           <>
//         <div className="navbar-profile-pic">
//             <img src={myPic} alt="profile pic"/>
//         </div>
//         <div className="nav-items">
//           <div className="nav-item">
//             <div className="nav-link">
//               <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
//               <FcHome/>
//               Home
//               </Link>
//              </div>
//               <div className="nav-link">
//               <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
//                 < FcAbout/>
//               About
//               </Link>
//               </div>
//               <div className="nav-link">
//               <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
//                 <FcReading/>
//               Education</Link>
//               </div>              

//               <div className="nav-link">
//               <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
//                 <FcBiotech/>
//               Tech Stack</Link>
//               </div>

//               <div className="nav-link">
//               <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>
//                 <FcVideoProjector/>
//               Projects</Link>
//               </div>
//               <div className="nav-link">
//               <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
//                 <FcPortraitMode/>
//               Work Experience</Link>
//               </div>              
//               <div className="nav-link">
//               <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
//                 <FcBusinessContact/>
//               Contact</Link>
//               </div>
//           </div>
//         </div>
//         </>
//         ):(
//           <>
//           <div className="nav-items">
//           <div className="nav-item">
//             <div className="nav-link"><Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
//               <FcHome/>
              
//               </Link>
//               </div>
//               <div className="nav-link">
//               <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
//                 < FcAbout/>
//               </Link>
//               </div>
//               <div className="nav-link">
//               <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
//                 <FcReading/>
//               </Link>
//               </div>              

//               <div className="nav-link"><Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
//                 <FcBiotech/>
//               </Link>
//               </div>
//               <div className="nav-link"><Link to="project" spy={true} smooth={true} offset={-100} duration={100}>
//                 <FcVideoProjector/>
//               </Link>
//               </div>
//               <div className="nav-link"><Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
//                 <FcPortraitMode/>
//               </Link>
//               </div>              
//               <div className="nav-link"><Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
//                 <FcBusinessContact/>
//               </Link>
//               </div>
//           </div>
//         </div>
//           </>
//         )
//         }
//     </>
//   )
// }

// export default Menus
// {/* <div className="nav-item">
//             <div className="nav-link">Home</div>
//           </div>
//           <div className="nav-item">
//             <div className="nav-link">Home</div>
//           </div>
//           <div className="nav-item">
//             <div className="nav-link">Home</div>
//           </div>
//           <div className="nav-item">
//             <div className="nav-link">Home</div>
//           </div>
//           <div className="nav-item">
//             <div className="nav-link">Home</div>
//           </div>
//           <div className="nav-item">
//             <div className="nav-link">Home</div>
//           </div>
//           <div className="nav-item">
//             <div className="nav-link">Home</div>
//           </div> */}
// import React from 'react';
// import "./menus.css";
// import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReading, FcVideoProjector, FcBusinessContact } from "react-icons/fc";
// import myPic from '../../assets/mypic.jpg';
// import { Link } from 'react-scroll';

// const Menus = ({ toggle }) => {
//   return (
//     <>
//       {toggle ? (
//         <>
//           <div className="navbar-profile-pic">
//             <img src={myPic} alt="profile pic" />
//           </div>
//         </>
//       ) : null}

//       <div className="nav-items">
//         <div className="nav-item">
//           <div className="nav-link">
//             <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
//               <FcHome />
//               <span>Home</span>
//             </Link>
//           </div>
//           <div className="nav-link">
//             <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
//               <FcAbout />
//               <span>About</span>
//             </Link>
//           </div>
//           <div className="nav-link">
//             <Link to="education" spy={true} smooth={true} offset={-100} duration={500}>
//               <FcReading />
//               <span>Education</span>
//             </Link>
//           </div>
//           <div className="nav-link">
//             <Link to="techstack" spy={true} smooth={true} offset={-100} duration={500}>
//               <FcBiotech />
//               <span>Tech Stack</span>
//             </Link>
//           </div>
//           <div className="nav-link">
//             <Link to="project" spy={true} smooth={true} offset={-100} duration={500}>
//               <FcVideoProjector />
//               <span>Projects</span>
//             </Link>
//           </div>
//           <div className="nav-link">
//             <Link to="work" spy={true} smooth={true} offset={-100} duration={500}>
//               <FcPortraitMode />
//               <span>Work Experience</span>
//             </Link>
//           </div>
//           <div className="nav-link">
//             <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
//               <FcBusinessContact />
//               <span>Contact</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menus;
import React from 'react';
import "./menus.css";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReading, FcVideoProjector, FcBusinessContact } from "react-icons/fc";
import myPic from '../../assets/mypic.jpg';
import { Link } from 'react-scroll';

const Menus = ({ toggle }) => {
  return (
    <>

      {toggle &&     <Zoom>
        (<div className="navbar-profile-pic">
          <img src={myPic} alt="profile pic" />
        </div>
      )
      </Zoom>
}
      <Fade left>
      <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active">
            <FcHome />
            {toggle && <span>Home</span>}
          </Link>
          </div>
          <div className="nav-link">
          <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active">
            <FcAbout />
            {toggle && <span>About</span>}
          </Link>
          </div>
          <div className="nav-link">
          <Link to="education" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active">
            <FcReading />
            {toggle && <span>Education</span>}
          </Link>
          </div>
          <div className="nav-link">
          <Link to="techstack" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active">
            <FcBiotech />
            {toggle && <span>Tech Stack</span>}
          </Link>
          </div>
          <div className="nav-link">
          <Link to="project" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active">
            <FcVideoProjector />
            {toggle && <span>Projects</span>}
          </Link>
          </div>
          <div className="nav-link">
          <Link to="work" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active">
            <FcPortraitMode />
            {toggle && <span>Work Experience</span>}
          </Link>
          </div>
           <div className="nav-link"> 
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active">
            <FcBusinessContact />
            {toggle && <span>Contact</span>}
          </Link>
          </div>
        </div>
      </div>
      </Fade>      
    </>
  );
};

export default Menus;
