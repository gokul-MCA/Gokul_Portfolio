import './App.css'
import Contact from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Intro } from './Components/Intro/intro';
import { Navbar } from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/portfolio';
import { Skill } from './Components/Skills/skill';
import About from './Components/About/about';
// import Timeline from './Components/Timeline/Timeline';
// import Work from './Components/Work/Work';
import { motion, useScroll, useSpring } from "framer-motion";
import Certificate from './Components/Certificate/certificate';


const App = () => {
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar/>
      <Intro/> 
      <About/>
      {/* <Timeline/> */}
      <Skill/>
      <Portfolio/>
      <Certificate/>
      {/* <Work/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
