import React,{ useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './portfolio.module.css';
import { IoLogoGithub } from "react-icons/io";
import { productData } from '../../utils/data';
import { responsive } from '../../utils/data';
import Head from '../ui/Head/Head';


export default function Portfolio() {
  
      const Data=productData.map((item,index) => 
       <div key={index} className={styles.cards}>

        <img src={item.imageUrl} alt={item.name} />

        <div className={styles.cardcontent}>
          <h4>{item.name}</h4>
          <div className={styles.cardcontentcontain}>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub className={styles.font} />
            </a>
          </div>    
        </div>
      </div> 
      )

  return (
    <section id='portfolio' className={styles.portfolio}>
      <Head>Portfolio</Head>
      <div className={styles.cardscontainer}>

      <div className={styles.cardscontain}>
        <Carousel responsive={responsive} showDots={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
           {Data}
        </Carousel>
      </div>

      </div>
     </section>
  )
}





{/* <div className="cards"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
              <img src={Data.url} alt="Portfolio" />
              {isHovered && (
                <div className="overlay">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub className="link" /></a>
                </div>
            )}
              <div className="card-content">
                <h4>{Data.detail}</h4>
                <p>{Data.description}</p>
              </div>
            </div> */}
