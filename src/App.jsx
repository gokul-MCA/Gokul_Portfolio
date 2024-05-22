import './App.css'
import Contact from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import { Intro } from './Components/Intro/Intro';
import { Navbar } from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import { Skill } from './Components/Skills/Skill';

import About from './Components/About/About';
// import Timeline from './Components/Timeline/Timeline';
import Work from './Components/Work/Work';


function App() {

  return (
    <>
      <Navbar/>
      <Intro/> 
      <About/>
      {/* <Timeline/> */}
      <Skill/>
      <Portfolio/>
      {/* <Work/> */}
      <Contact/>
      <Footer/>
    </>

  )
}

export default App
