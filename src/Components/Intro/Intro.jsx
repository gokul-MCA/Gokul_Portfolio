import React from 'react';
import './module.intro.css';
import { Link } from 'react-scroll';
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import Resume from '../../assets/GOKUL B_RESUME.pdf';
import Button from '../ui/Button/Button';


import img from '../../assets/bg-removed.png';
const user = { 
    name : "GOKUL B",
    quote : "\"The Fearless Programmer\"",
    roles : "Front-End Developer",
    about : ["I am a passionate frontend website developer with a keen interest in creating engaging and user-friendly digital experiences.",
             " My journey in frontend development has equipped me with a strong foundation in HTML, CSS, and JavaScript, along with expertise in modern frameworks like React, Next.js. "]
}


export const Intro = () => {
  return (
 
    <section id="intro">
      <div className="intro-container">

        {/* 1 */}
        <div className="introContent">
           <span className='introText'>Hello,</span>
           <span className="introText">I'm <b>{user.name}</b></span>
           <span className='introRole'> {user.roles}</span>
           <span className="introAbout"> {user.about[0]} </span>
           <span className="introAbout"> {user.about[1]} </span>

           <div className='btn'>
            <Link activeClass='active' to='contact' spy={true} smooth={true} 
             offset={10} duration={500}><Button className='btnFont'><FaBriefcase  className='btnFonts'/>Hire Me</Button></Link>
            <a href={Resume} download='Resume'><Button className='btnFont'><MdOutlineFileDownload className='btnFonts'/>Resume</Button></a>
           </div>
        </div>

        {/* 2 */}
        <div className="image">
            <img src={img} alt="My Photo" /><br/>
            <span className='introQuote'>{user.quote}</span>
        </div>
      </div>
    </section>

  )
}
