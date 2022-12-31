import React from 'react'
import Header from '../../components/Header'
import HeaderImg from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import Rotate from 'react-reveal/Rotate';

import './contect.css'

function Contact() {
  return (
    <>
      <Header img={HeaderImg} title='Get In Touch'
       children="Fruga itaque ducimus, ad anet praesentium suscit sit, assummenda nihil officea totam, animi cupa nobis nemo natus dolremque?"
      />
      <section className='contect'>
        <div className='container contact__container'  >
          <Rotate top left >
            <div className='contact__wrpper'>
              <a href='#'><MdEmail /></a>
              <a href='#'>< BsMessenger/></a>
              <a href='#'><IoLogoWhatsapp /></a>
            </div>
          </Rotate>
        </div>
      </section>
    </>
  )
}

export default Contact;