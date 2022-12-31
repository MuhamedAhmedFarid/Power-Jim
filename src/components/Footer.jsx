import React from 'react'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

function Footer() {
  return (
    <footer>
        <div className="container footer__containr">
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nam quidem voluptatem impedit dicta laborum ex ullam quam totam, sunt ipsum?
                </p>
                <div className="footer__socials">
                    <a href='#'><FaLinkedin/></a>
                    <a href='#'><FaFacebook/></a>
                    <a href='#'><AiOutlineTwitter/></a>
                    <a href='#'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Studies</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Communitis</Link>
                <Link to='/s'>FAQs</Link>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to='/contact'>Contact</Link>
                <Link to='/s'>Support</Link>

                
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 TUTORIALS &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer