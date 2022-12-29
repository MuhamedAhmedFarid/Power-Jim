import React from 'react'

function SectionHead(props) {
  return (
    <div className='section__head'>
        <span>{props.icon}</span>
        <h2>{props.title}</h2>
    </div>
  )
}

export default SectionHead