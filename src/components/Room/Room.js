import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './Room.css'
export default function Room({ room }) {
 
   let { name, slug, images, price } = room
  
    return (
             <div className="col-md-4">
              <div className="content">
                <div className="content-overlay"></div>
                <div className="image">
                <img src={images[0]} alt="rooms" />
                <div className="desc">
                  <h6 className="content-title">${price}</h6>
                <p className="content-text">per night</p>
                </div>
                </div>
                <div className="content-details fadeIn-bottom">
                  <h4 className="content-title">{name}</h4>
                  <Link to={`/rooms/${slug}`} className="btn btn-outline">features</Link>
                    
                </div>
             

              </div>
            </div>
           
       
      
    )
  }

  Room.propTypes={
    room:PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.string).isRequired,
      price:PropTypes.number.isRequired,
    }),
  }