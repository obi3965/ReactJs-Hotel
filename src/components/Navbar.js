import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'



const Navbar = (props) => {
    const [ click, setClick ] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
  return(
    <>
     <nav className='navbar shadow-sm'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' activeClassName="is-active" onClick={closeMobileMenu} exact={true}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/rooms'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
                rooms
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/contacts'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
                contacts
              </NavLink>
            </li>

            
          </ul>
          
        </div>
      </nav>
    </>
   )

 }

export default Navbar


