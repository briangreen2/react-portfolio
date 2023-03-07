import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>BRIAN</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/brian-green1122/"><BsLinkedin /></a>
        <a href="https://github.com/briangreen2"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; BRIAN GREEN. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer