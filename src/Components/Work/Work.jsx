import React, { useState, useEffect } from 'react';
import './Work.css';
import pt from '../../assets/WebDesigner.png';
import Head from '../ui/Head/Head';

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const projects = [
    { img: pt, title: '1', description: 'React.js, HTML, CSS' },
    { img: pt, title: '2', description: 'React.js, HTML, CSS' },
    { img: pt, title: '3', description: 'React.js, HTML, CSS' },
    { img: pt, title: '4', description: 'React.js, HTML, CSS' },
    { img: pt, title: '5', description: 'React.js, HTML, CSS' },
    { img: pt, title: '6', description: 'React.js, HTML, CSS' },
    { img: pt, title: '7', description: 'React.js, HTML, CSS' },
    { img: pt, title: '8', description: 'React.js, HTML, CSS' }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth >= 480) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - slidesToShow : prevIndex - 1
    );
  };

  return (
    <section id="work">
      <Head>Portfolio</Head>
      <div className="carousel-container">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}>
          {projects.map((project, index) => (
            <div
              className="cardss"
              key={index}
              style={{
                width: `${100 / slidesToShow}%`,
              }}
            >
              <img src={project.img} alt={project.title} />
              <div className="card-contentss">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Work;
