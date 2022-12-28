import React from 'react'
import './navBar.css'
import {links} from '../data'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaBars} from 'react-icons/fa'

function NavBar() {
  return (
    <nav>
        <div className='container nav-container'>
            <Link to='/' className='logo'>
                <img src={Logo} />
            </Link>
            <ul className='nav__links'>
                {
                links.map(({name, path}, index) => {
                    return(
                        <li>
                            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ""}>{name}</NavLink>
                        </li>
                    )
                })
                }
            </ul>
            <botton className="nav__toggle-btn">
                <FaBars/>
            </botton>
        </div>
    </nav>
  )
}

export default NavBar