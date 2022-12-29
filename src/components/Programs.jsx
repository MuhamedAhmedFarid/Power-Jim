import React from 'react'
import {GiImperialCrown} from 'react-icons/gi'
import {AiFillCaretRight} from 'react-icons/ai'
import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'


function Programs() {
  return (
    <section className='programs'>
        <div className='container__programs-container'>
          <div className='programs__head room'>
              <SectionHead
              icon={<GiImperialCrown/>}
              title='programs'/>
              <div className='programs__wrapper'>
                {programs.map(({id, icon, title, info, path}) => {
                  return <Card className='programs__program' key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{info}</small>
                    <Link to={path} className='btn sm'>Learn More <AiFillCaretRight /></Link>
                  </Card>
                })}
              </div>
          </div>
      </div>
    </section>
  )
}

export default Programs