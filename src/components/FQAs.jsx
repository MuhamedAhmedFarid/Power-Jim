import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import {faqs} from '../data'
import FQA from './FQA'
import SectionHead from './SectionHead'
function FQAs() {
  return (
    <section className='faqs'>
        <div className='container faqs__container'>
            <SectionHead icon={<FaQuestion/>} title='FAQs' />
            <div className='faqs__wrapper'>
                {
                    faqs.map(({id, question, answer}) => {
                        return <FQA key={id} question={question} answer={answer} />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FQAs