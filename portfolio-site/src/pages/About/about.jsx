import React from 'react'
import './About.css';
import Jump from 'react-reveal/Jump';
import myPic from '../../assets/mypic.jpg';

const About = () => {
  return (
    <>
    <Jump>
    <div className="about" id="about">
        <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img id="pic" src={myPic} alt="profile pic"/>  
            </div>
            <div className="col-md-6 about-content">
              <h1>About Me</h1>
              <p>
              I am an enthusiastic problem solver, particularly interested in mathematics and coding. I cracked JEE Main with an AIR of 15750 and JEE Advanced with an AIR of 13292.
I enjoy learning new things and love spending time in nature and greenery, especially when alone, with family, or with friends. I also love drawing when I have free time.
              </p>
            </div>
        </div>
    </div>
    </Jump>
    </>
  )
}

export default About;