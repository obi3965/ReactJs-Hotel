// import React from "react";
// import { Link } from 'react-router-dom'
// import './Hero.css'
// const Banner = ({ children, title, subtitle }) => {
//   return (
//     // <div className="banner">
//     //   <h1>{title}</h1>
//     //   <div />
//     //   <p>{subtitle}</p>
//     //   {children}
//     // </div>

//     <div className="container">
//      <div className="home">
//        <div className="row">
//          <div className="col-6 order-0">
//            <div className="hom-banner">
//            <h1>{ title }</h1>
//              <div className="home-banner-desc">
//                <p>
//                 {subtitle}
//                </p>
//              </div>
//              <Link to='/rooms' className="btn">our rooms</Link>
//            </div>
//          </div>
//          <div className="col-md-6">
//            <div className="banner-image">
//              {children}
//            </div>
//          </div>
         
//        </div>
//      </div>
//      </div>
//   );
// };

// export default Banner;


import React from "react";
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
