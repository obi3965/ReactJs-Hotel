 import React from 'react'
//import state from '../data/services'
import './services.css'


   
   
   class Services extends React.Component {
    state = {
        services:[
        {
            image:"../img/foods.svg",
            title:"foods",
            text:"we have provided free breakfast opportunity for our all type of guests during the,which you can't get in other places."
        },
        {
            image:"../img/internet.svg",
            title:"internet",
            text:"we have provided free internet opportunity for our all type of guests during the,which you can't get in other places."
        },
        {
            image:"../img/pool.svg",
            title:"foods",
            text:"we have provided free pool opportunity for our all type of guests during the,which you can't get in other places."
        },
    
        ]
    }
   
       render() {
           return (
             <div>
               <div className="service-title">
                 <h1>our services</h1>
               </div>
               <div className="underline"></div>
               <div className="row offset-md">
               {this.state.services.map((item, index) => {
              return (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="box-1">
                    <div className="box-1-items">
                      <img src={ item.image } alt="foods" />
                      <div className="box-1-desc">
                        <h3>{ item.title }</h3>
                        <p>{ item.text } </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
             </div>
             </div>
             
           );
       }
   }
   
   
   
   export default Services;
   