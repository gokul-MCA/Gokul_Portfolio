import React from 'react';
import styles from './intro.module.css';
import { Link } from 'react-scroll';
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import Resume from '../../assets/Resume_Gokul_B.pdf';
import Button from '../ui/Button/Button';
import img from '../../assets/bg-removed-tinypng.png';
import Typewriter from "typewriter-effect";

const user = { 
    name : "GOKUL B",
    quote : "\"The Fearless Programmer\"",
    roles : "Front-End Developer",
    about : ["I am a passionate frontend website developer with a keen interest in creating engaging and user-friendly digital experiences.",
             "I am a passionate frontend website developer. My journey in frontend development has equipped me with a strong foundation in HTML, CSS, and JavaScript, along with expertise in modern frameworks like React, Next.js.",
             "As a fresher I am eager to embark on a career as a Python developer. My interest in this versatile language drives my passion for learning and growth in this field. I have a solid grasp of Python basics, including variables, data types, control structures, functions, and introductory modules and libraries."]
}


export const Intro = () => {
  return (
 
    <section id='intro' className={styles.intro}>
      <div className= {styles.intro_container}>

        {/* 1 */}
        <div className={styles.introContent}>
           <span className={styles.introText}>Hello,</span>
           <span className={styles.introText}>I'm <b>{user.name}</b></span>
           <span className={styles.introRole}> 
           <Typewriter
             options={{
             strings: ['Front-End Developer', 'Python Developer'],
             autoStart: true,
             loop: true,
             pauseFor:2000,
             }}
           />
           </span>
           {/* <span className='introRole'>
           <Typewriter
               options={{autoStart:true,loop:true}} onInit={(typewriter) => {
                    typewriter
                        .typeString("Front-End Developer")
                        .pauseFor(44000)
                        .deleteAll()
                        .typeString("Python Developer")
                        .pauseFor(65000)
                        .start();
                }}
            />
          </span>
          <span className={styles.introAbout}> <Typewriter  options={{
                         strings: ['I am a passionate frontend website developer. My journey in frontend development has equipped me with a strong foundation in HTML, CSS, and JavaScript, along with expertise in modern frameworks like React, Next.js. ',
                                   'As a fresher I am eager to embark on a career as a Python developer. My interest in this versatile language drives my passion for learning and growth in this field. I have a solid grasp of Python basics, including variables, data types, control structures, functions, and introductory modules and libraries.',],
                         autoStart: true,
                         pauseFor:1000,
                         loop: true,
            }}/>  </span> */}
           <span className={styles.introAbout}> {user.about[1]} </span>
           <span className={styles.introAbout}> {user.about[2]} </span>

           <div className={styles.btn}>
            <Link activeClass='active' to='contact' spy={true} smooth={true} 
             offset={90} duration={500}><Button className={styles.btnFont}><FaBriefcase  className={styles.btnFonts}/>Hire Me</Button></Link>
            <a href={Resume} download='Resume'><Button className={styles.btnFont}><MdOutlineFileDownload className={styles.btnFonts}/>Resume</Button></a>
           </div>
        </div>

        {/* 2 */}
        <div className={styles.image}>
            <img src={img} alt="My Photo"  loading="lazy"/><br/>
            <span className={styles.introQuote}>{user.quote}</span>
        </div>
      </div>
    </section>

  )
}
