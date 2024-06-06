import React from 'react'
import styles from './certificate.module.css'
import Carousel from 'react-multi-carousel';
import { certificateData, responsive } from '../../utils/data'
import { SiSololearn } from "react-icons/si";
import Head from '../ui/Head/Head';

export default function Certificate (){

  const data = certificateData.map((item,index) => 
     <div key={index} className={styles.cards}>

      <img src={item.image} alt={item.name} />

      <div className={styles.certificate_content}>
         <h4>{item.name}</h4>
         <a href={item.link} target="_blank" rel="noopener noreferrer">
              <SiSololearn className={styles.font} />
        </a>
      </div>

     </div>                                               
  )

  return (
    <section id={styles.certificate}>
      <Head>Certificates</Head>
      <div className={styles.certificate_container}>

      <div className={styles.certificate_contain}>
        <Carousel responsive={responsive} showDots={true} >
           {data}
        </Carousel>
      </div>

      </div>

    </section>
  )
}
