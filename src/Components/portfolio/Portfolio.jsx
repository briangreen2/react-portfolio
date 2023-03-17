import React from 'react'
import './portfolio.css'
import HOOB from '../../assets/hoobank-image.png'
import WEATHER from '../../assets/Weather-app-image.png'
import RESTAURANT from '../../assets/restaurant-pic.png'


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
            <img src={RESTAURANT} alt="" />
          </div>
          <h3>Restaurant Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/briangreen2/Restaurant-website" className='btn' target='_blank'>Github</a>
            <a href="https://restaurant-website-jet-two.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio