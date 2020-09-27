import React from 'react'
import { Link } from 'react-router-dom'
import '../../components/styles/Error.css'
/**
* @author
* @function Errors
**/

const Errors = (props) => {
  return(
    <div className="error-banner">
      <div className="error-items">
        <h1>Page Found</h1>
      <Link to="/" className="btn-outline">back to home</Link>
      </div>
      
    </div>
    
  )

 }

export default Errors