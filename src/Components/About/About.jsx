import React from 'react'
import styles from './about.module.css';
import Head from '../ui/Head/Head';
import { timelines } from '../../utils/data';



const About = () => {
  return (
    <section id='about' className={styles.about}>
      <Head>About</Head>
      <div className={styles.timeline_container}> 

      <div className={styles.timelines}>
      <span className={styles.line}></span>
        {timelines.map(item => (
          <div key={item.id} className={`${styles.container} ${styles[item.position+"container"]}`}>
            <div className={styles.textbox}>
              <h3>{item.title}</h3>
              <strong>{item.subtitle}</strong>
              <p>{item.description}</p>
              <span className={`${styles[item.position+"containerarrow"]}`}></span>
            </div>
          </div>
        ))}
      </div>
        </div>
    </section>
  )
}

export default About;
