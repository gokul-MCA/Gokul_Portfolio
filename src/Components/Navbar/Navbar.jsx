import React, { useState } from 'react';
import styles from './navbar.module.css';
import {Link} from 'react-scroll';
// import { MdMessage } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";



export const Navbar = () => {
  const[showMenu,setShowMenu]=useState(false);
 
  return (
    
        <nav className={styles.navbar}>
           <a href='/' className={styles.logolink}><img src="short_logo.jpeg"alt="tgrfv" className={styles.logo1}/></a>
           <div className={styles.desktopMenu}>
             <Link activeClass='active' to='intro' spy={true} smooth={true} 
             offset={-100} duration={500} className={styles.desktopMenuListItem}>Home</Link> 

             <Link activeClass='active' to='about' spy={true} smooth={true} 
             offset={-70} duration={500} className={styles.desktopMenuListItem}>About</Link> 

             <Link activeClass='active' to='skills' spy={true} smooth={true} 
             offset={-100} duration={500} className={styles.desktopMenuListItem}>Skills</Link>

             <Link activeClass='active' to='portfolio' spy={true} smooth={true} 
             offset={-100} duration={500} className={styles.desktopMenuListItem}>Portfolio</Link> 
           </div>

           {/* <button className="desktopMenuBtn" onClick={()=>{ document.getElementById('contact').scrollIntoView({behavior:'smooth',duration:'500'}) }}>
           <MdMessage  className='desktopMenuFont'/>Contact Me</button> */}
           {/* <GiHamburgerMenu alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/> */}

           {showMenu ? (
                <FaXmark alt="Close" className={`${styles.mobMenu} ${styles.fnt}`} onClick={() => setShowMenu(!showMenu)} />
            ) : (
                <GiHamburgerMenu alt="Menu" className={`${styles.mobMenu} ${styles.fnt}`} onClick={() => setShowMenu(!showMenu)} />
            )}
           <div className={styles.navMenu} style={{display: showMenu? 'flex':'none'}}>

             <Link activeClass='active' to='intro' spy={true} smooth={true} 
             offset={-100} duration={500} className={styles.listItem} onClick={()=>setShowMenu(false)}>Home</Link> 

             <Link activeClass='active' to='about' spy={true} smooth={true} 
             offset={-100} duration={500} className={styles.listItem} onClick={()=>setShowMenu(false)}>About</Link>

             <Link activeClass='active' to='skills' spy={true} smooth={true} 
             offset={-100} duration={500} className={styles.listItem} onClick={()=>setShowMenu(false)}>Skills</Link> 

             <Link activeClass='active' to='portfolio' spy={true} smooth={true} 
             offset={-100} duration={500} className={styles.listItem} onClick={()=>setShowMenu(false)}>Portfolio</Link>

             <Link activeClass='active' to='contact' spy={true} smooth={true} 
             offset={-10} duration={500} className={styles.listItem} onClick={()=>setShowMenu(false)}>Contact</Link>

           </div>
        </nav>
  )
}
