import React, { useState } from 'react';
import './module.navbar.css';
import {Link} from 'react-scroll';
// import { MdMessage } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";



export const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);
 
  return (
    
        <nav className="navbar">
           <a href='/' className='logolink'><img src="short_logo.jpeg"alt="tgrfv" className='logo1'/></a>
           <div className="desktopMenu">
             <Link activeClass='active' to='intro' spy={true} smooth={true} 
             offset={-100} duration={500} className="desktopMenuListItem">Home</Link> 

             <Link activeClass='active' to='about' spy={true} smooth={true} 
             offset={25} duration={500} className="desktopMenuListItem">About</Link> 

             <Link activeClass='active' to='skills-container' spy={true} smooth={true} 
             offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>

             <Link activeClass='active' to='portfolio' spy={true} smooth={true} 
             offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link> 
           </div>

           {/* <button className="desktopMenuBtn" onClick={()=>{ document.getElementById('contact').scrollIntoView({behavior:'smooth',duration:'500'}) }}>
           <MdMessage  className='desktopMenuFont'/>Contact Me</button> */}

           <GiHamburgerMenu alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
           <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>

             <Link activeClass='active' to='intro' spy={true} smooth={true} 
             offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link> 

             <Link activeClass='active' to='about' spy={true} smooth={true} 
             offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>

             <Link activeClass='active' to='skills-container' spy={true} smooth={true} 
             offset={-150} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link> 

             <Link activeClass='active' to='portfolio' spy={true} smooth={true} 
             offset={-30} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>

             <Link activeClass='active' to='contact' spy={true} smooth={true} 
             offset={-10} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>

           </div>
        </nav>
  )
}
