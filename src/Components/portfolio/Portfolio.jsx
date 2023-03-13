import React from 'react'
import './portfolio.css'
import HOOB from '../../assets/hoobank-image.png'
import WEATHER from '../../assets/Weather-app-image.png'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={WEATHER} alt="" />
          </div>
          <h3>Weather App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/briangreen2/Weather_Website" className='btn' target='_blank'>Github</a>
            <a href="https://briangreen2.github.io/Weather_Website/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={HOOB} alt="" />
          </div>
          <h3>Fully Responsive Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/briangreen2/react-hoobank" className='btn' target='_blank'>Github</a>
            <a href="https://react-hoobank-dun.vercel.app/#home" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/briangreen2" className='btn' target='_blank'>Weather App</a>
            <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio