
import React from 'react'
import './home.css'
import Programs from '../../components/Programs'
import Valus from '../../components/Valus'
import MianHeader from '../../components/MainHeader'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import FQAs from '../../components/FQAs'
import Testiosials from '../../components/Testiosials'
function Home() {
  return (
    <div>
    <MianHeader />
    <Fade bottom>
      <Programs />
    </Fade>
    <Valus />
    <Slide left>
      <FQAs />
    </Slide>
    <Testiosials />

    
    </div>

    
  )
}

export default Home