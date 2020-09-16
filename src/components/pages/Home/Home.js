import React from 'react'

import Hero from '../../Hero/Hero.js'
import Services from '../../Services-section/Services'
import FeaturedRooms from '../../featuredRooms.js/FeaturedRooms'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <>
    <div className="banner-section">
      <Hero /> 
     
    </div>
    <div className="container">
      <Services />   
    </div>

    <FeaturedRooms />
        
    
      
    </>
   )

 }

export default Home