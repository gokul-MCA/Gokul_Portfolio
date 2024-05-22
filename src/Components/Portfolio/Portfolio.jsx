import React,{ useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './module.portfolio.css';
import { IoLogoGithub } from "react-icons/io";
import { productData } from '../../utils/data';
import { responsive } from '../../utils/data';
import Head from '../ui/Head/Head';


export default function Portfolio() {
  
      const Data=productData.map((item,index) => 
       <div key={index} className="cards">

        <img src={item.imageUrl} alt={item.name} />

        <div className="card-content">
          <h4>{item.name}</h4>
          <div className="card-content-contain">
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub className="font" />
            </a>
          </div>    
        </div>
      </div> 
      )

  return (
    <section id="portfolio">
      <Head>Portfolio</Head>
      <div className="cards-container">

      <div className="cards-contain">
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
