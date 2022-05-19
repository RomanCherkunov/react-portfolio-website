import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG1} alt="img" />
          </div>
          <h3>This is  aportfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG1} alt="img" />
          </div>
          <h3>This is  aportfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG3} alt="img" />
          </div>
          <h3>This is  aportfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-img">
            <img src={IMG4} alt="img" />
          </div>
          <h3>This is  aportfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio