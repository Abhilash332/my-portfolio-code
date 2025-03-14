import React from 'react'
import './MobileNav.css'
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-scroll';
import { FcHome, FcAbout, FcPortraitMode, FcBiotech, FcReading, FcVideoProjector, FcBusinessContact } from "react-icons/fc";
import { RiMenuAddFill } from "react-icons/ri";
import {useState} from 'react'

const MobileNav = () => {
    const [open,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };
    const handleOpenClick=()=>{
        setOpen(false)
    }

  return (
    <>
        <div className="mobile-nav">
            <div className="mobile-nav-header">
                {open ? (<IoMdMenu size={30} className="mobile-nav-icon" onClick={handleOpen}/>) : (<RiMenuAddFill size={30} className="mobile-nav-icon" onClick={handleOpen}/>)}
            
            <span className="mobile-nav-title">My Portfolio App</span>
            </div>
            {open && (
            <div className="mobile-nav-menu">
            <div className="nav-items">
                    <div className="nav-item">
                      <div className="nav-link">
                      <Link to="home" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active" onClick = {handleOpenClick}>
                        <FcHome />
                        <span>Home</span>
                      </Link>
                      </div>
                      <div className="nav-link">
                      <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active" onClick = {handleOpenClick}>
                        <FcAbout />
                        <span>About</span>
                      </Link>
                      </div>
                      <div className="nav-link">
                      <Link to="education" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active" onClick = {handleOpenClick}>
                        <FcReading />
                      <span>Education</span>
                      </Link>
                      </div>
                      <div className="nav-link">
                      <Link to="techstack" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active" onClick = {handleOpenClick}>
                        <FcBiotech />
                        <span>Tech Stack</span>
                      </Link>
                      </div>
                      <div className="nav-link">
                      <Link to="project" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active" onClick = {handleOpenClick}>
                        <FcVideoProjector />
                       <span>Projects</span>
                      </Link>
                      </div>
                      <div className="nav-link">
                      <Link to="work" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active" onClick = {handleOpenClick}>
                        <FcPortraitMode />
                       <span>Work Experience</span>
                      </Link>
                      </div>
                       <div className="nav-link"> 
                      <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="nav-link" activeClass="active" onClick = {handleOpenClick}>
                        <FcBusinessContact />
                       <span>Contact</span>
                      </Link>
                      </div>
                    </div>
                  </div>
        </div>
            )}

        </div>
    </>
  )
}

export default MobileNav