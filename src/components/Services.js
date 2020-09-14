import React from 'react'
import './services.css'
/**
* @author
* @function Services
**/

const Services = (props) => {
  return(
    <div>
        <div className="service-title">
           <h1>our services</h1> 
            </div>
            <div className="underline"></div>
     <div className="row offset-md">
     <div className="col-12 col-md-6 col-lg-4">
         <div className="box-1">
             <div className="box-1-items">
                 <img src="../img/foods.svg" alt="foods"/>
                 <div className="box-1-desc">
                    <h3>foods</h3>
                    <p>we have provided free breakfast opportunity 
                    for our all type of guests during the, 
                    which you can't get in other places.</p> 
                 </div>
             </div>
         </div>
     </div>
     <div className="col-12 col-md-6 col-lg-4">
         <div className="box-2">
         <div className="box-2-items">
                 <img src="../img/internet.svg" alt="internet"/>
                 <div className="box-2-desc">
                    <h3>internet</h3>
                    <p>we have provided free internet opportunity 
                    for our all type of guests during the, 
                    which you can't get in other places.</p> 
                 </div>
             </div>
         </div>
     </div>
     <div className="col-12 col-md-6 col-lg-4">
         <div className="box-3">
         <div className="box-3-items">
                 <img src="../img/pool.svg" alt="pool"/>
                 <div className="box-3-desc">
                    <h3>pool</h3>
                    <p>we have provided the free pool opportunity 
                    for our all type of guests during the, 
                    which you can't get in other places.</p> 
                 </div>
                  
             </div>
         </div>
     </div>
     </div>
    </div>
   )

 }

export default Services