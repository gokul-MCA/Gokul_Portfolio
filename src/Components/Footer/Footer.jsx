import React from 'react';
import  styles from './footer.module.css';
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { SiSololearn } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
         <div className={styles.links}>
                <a href="https://github.com/gokul-MCA" target="_blank" rel="noopener noreferrer"><IoLogoGithub className={styles.link} /></a>
                <a href="https://www.linkedin.com/in/gokul-b-mca/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn alt="linkedin" className={styles.link} /></a>
                <a href="https://twitter.com/Gokulpnr91" target="_blank" rel="noopener noreferrer"> <FaXTwitter className={styles.link} /></a>
                <a href="https://www.sololearn.com/en/profile/17539242" target="_blank" rel="noopener noreferrer"> <SiSololearn className={styles.link} /></a>
               </div>
               <p className={styles.para}>Portfolio &copy; gokul💚2024.<span className={styles.text}> All rights reserved.</span></p>
     </footer>
  )
}
