import React from 'react'
import './noFound.css'
import { Link } from 'react-router-dom'

function NoFound() {
  return (
    <section>
      <div className="container notfound__container">
        <h1>Page Not Found</h1>
        <Link to='/' className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default NoFound