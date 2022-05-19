import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-img">
              <img src={ME} alt="me-about" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <FaAward className='about_icon' />
                <h5>Experience</h5>
                <small>3+ years working</small>
              </article>
              <article className='about_card'>
                <FiUsers className='about_icon' />
                <h5>Clients</h5>
                <small>200+ worldwide</small>
              </article>
              <article className='about_card'>
                <VscFolderLibrary className='about_icon' />
                <h5>Projects</h5>
                <small>80+ completed projects</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, possimus, fuga ad sunt cum voluptas sint velit libero aliquid veniam harum nihil vel consequuntur optio natus iste ea eligendi molestiae, pariatur quos quis atque. Non sequi tenetur distinctio impedit, praesentium laudantium.
            </p>
            <a href="#contacts" className='btn btn-primary'>Let`s Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About