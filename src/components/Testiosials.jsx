import React from 'react'
import SectionHead from './SectionHead'
import {ImQuotesLeft} from 'react-icons/im'
import Card from '../UI/Card'
import {IoIosArrowDropleftCircle, IoIosArrowDroprighttCircle} from 'react-icons/io'
import {testimonials} from '../data'

function Testiosials() {
    const [index, setIndex] = React.useState(2)
    const {name, quote, job, avatar} = testimonials[index]
  return ( 
    <section className='testimoials'>
        <div className='container testimonials__container'>
            <SectionHead icon={<ImQuotesLeft/>} title='Testimonials' />

            <Card className='testimonial'>
                <div className='testinonial__avatar'>
                    <img src={avatar} />
                </div>

            </Card>
        </div>
    </section>
  )
}

export default Testiosials