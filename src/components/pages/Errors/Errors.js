import React from 'react'
import { Link } from 'react-router-dom'
/**
* @author
* @function Errors
**/

const Errors = (props) => {
  return(
    <div>
      <div>no such a room could be found</div>
      <Link to="/rooms" className="btn-outline">back to home</Link>
    </div>
    
  )

 }

export default Errors