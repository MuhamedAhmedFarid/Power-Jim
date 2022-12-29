import React from 'react'
import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import { GiCutDiamond } from "react-icons/gi";
import {values} from '../data'
import Card from '../UI/Card';
import Rotate from 'react-reveal/Rotate';
function Valus() {
  return (
    <section className='valus'>
        <div className='container  values__container  '>
                <div className='valuse__left'>
                    <div className='values__image'>
                        <img src={Image} width='200px'/>
                    </div>
                </div>
                <div  className='valuse__right'>
                    <SectionHead icon={<GiCutDiamond/>} title='Values' />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, in sint consequatur itaque voluptas aliquid cupiditate minima necessitatibus .
                    </p>
                <Rotate top right>
                    <div className='values__wrpper'>
                        {values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className='values__value'>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })}
                    </div>
                </Rotate>
                </div>

        </div>

        
    </section>
  )
}

export default Valus