
import React from "react";
import './Banner.css'
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner-section">
        
        
                <div className="banner-title"> <h1>{title}</h1>
                <p>{subtitle}</p>
                </div>
                 {children}
            
            
      
     
    </div>
  );
};

export default Banner;
