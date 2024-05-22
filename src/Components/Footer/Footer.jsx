import React from 'react';
import './module.footer.css';
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { SiSololearn } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="footer">
         <div className="links">
                <a href="https://github.com/gokul-MCA" target="_blank" rel="noopener noreferrer"><IoLogoGithub className="link" /></a>
                <a href="https://www.linkedin.com/in/gokul-b-mca/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn alt="linkedin" className="link" /></a>
                <a href="https://twitter.com/Gokulpnr91" target="_blank" rel="noopener noreferrer"> <FaXTwitter className="link" /></a>
                <a href="https://www.sololearn.com/en/profile/17539242" target="_blank" rel="noopener noreferrer"> <SiSololearn className="link" /></a>
               </div>
               <p>Portfolio &copy; 2024 gokul.<span className='text'> All rights reserved.</span></p>
     </footer>
  )
}
