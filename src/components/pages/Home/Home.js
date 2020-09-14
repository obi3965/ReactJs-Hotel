import React from 'react'

import Hero from '../../Hero/Hero.js'
import Services from '../../Services'

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
        
    
      {/* {children.props} */}
    </>
   )

 }

export default Home