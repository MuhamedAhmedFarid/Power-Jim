import React from 'react'
import './navBar.css'
import {links} from '../data'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import {FaBars} from 'react-icons/fa'
import {MdOutlineClose} from 'react-icons/md'


function NavBar() {
    const [isNavShowing, setIsNavShowing] = React.useState(false)
  return (
    <nav>
        <div className='container nav-container'>
            <Link to='/' className='logo'>
                <img src={Logo}
                onClick={() => setIsNavShowing(false)}
                />
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : "hide__nav" }`}>
                {
                links.map(({name, path}, index) => {
                    return(
                        <li key={index}>
                            <NavLink to={path} 
                            className={({isActive}) => isActive ? 'active-nav' : ""}
                            onClick={() => setIsNavShowing((prev) => !prev)}
                            >{name}</NavLink>
                        </li>
                    )
                })
                }
            </ul>
            <botton onClick={() => setIsNavShowing((prev) => !prev)} className="nav__toggle-btn">
                {
                    isNavShowing ? <MdOutlineClose /> : <FaBars/> 
                }
            </botton>
        </div>
    </nav>
  )
}

export default NavBar