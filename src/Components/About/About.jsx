import React from 'react'
import './module.about.css';
import Head from '../ui/Head/Head';
import { timelines } from '../../utils/data';



const About = () => {
  return (
    <section id="about">
      <Head>About</Head>
      <div className='timeline-container'> 

      <div className='timelines'>
      <span className='line'></span>
        {timelines.map(item => (
          <div key={item.id} className={`container ${item.position}-container`}>
            <div className="text-box">
              <h3>{item.title}</h3>
              <strong>{item.subtitle}</strong>
              <p>{item.description}</p>
              <span className={`${item.position}-container-arrow`}></span>
            </div>
          </div>
        ))}
      </div>
        </div>
    </section>
  )
}

export default About;
