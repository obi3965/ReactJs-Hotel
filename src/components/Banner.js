
import React from "react";
import './Banner.css'
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner-items">
            
                <h1>{title}</h1>
                <div className="banner-desc">
                 <p>{subtitle}</p> 
                </div>
                
               
                 {children}
            
            
      
     
    </div>
  );
};

export default Banner;
