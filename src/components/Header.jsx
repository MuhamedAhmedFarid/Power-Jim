import React, { Children } from 'react'

function Header(props) {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__containr-bg'>
          <img src={props.img}/>
        </div>
        <div className='header__content'>
          <h2>{props.title}</h2>
          <p>{props.children}</p>
        </div>
      </div>
    </header>
  )
}

export default Header