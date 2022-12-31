import React from 'react'
import './plans.css'
import Header from '../../components/Header'
import HeaderImg from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'
function Plans() {
  return (
    <>
      <Header img={HeaderImg} title='Membership' 
      children='Assumenda perspiciatis asperiores deserunt quisquam, sit iusto consctetu vero similique aliquam.'
      />
      <section className='plans'>
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features}) => {
              return <Card key={id}>
                <h3>{name}</h3>
                <small>{desc}</small>
                 <h1>{`$ ${price}`}</h1>
               <h4>Features</h4>
               {
                features.map(({feature, available}, index) =>{
                  return <p key={index} className={!available ? 'disaanled' : '' }>{feature}</p>
                })
               }
               <button className='btn lg'> Choose Plan</button>
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans