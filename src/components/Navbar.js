import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
    const [ click, setClick ] = useState(false)
    // const [Button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    // const showButton = () =>{
    //     if(window.innerWidth <= 960){
    //         setButton(false)
    //     }else{
    //         setButton(true)
    //     }
    // }

    // window.addEventListener('resize', showButton)
  return(
    <>
     <nav className='navbar shadow-sm'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/rooms'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                rooms
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contacts'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                contacts
              </Link>
            </li>

            
          </ul>
          
        </div>
      </nav>
    </>
   )

 }

export default Navbar

