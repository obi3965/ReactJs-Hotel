import React, { Component } from 'react'
import './styles/Subscribe-form.css'

export default class SubscribeForm extends Component {

    render() {
        return (
            <>
               <div className="newsletter">
               <div className="container">
                   <div className="subscribe-title">
                        <h1>subscribe to our newsletter</h1>
                   </div>
                     
                           <form className="form-inline">
                           <div className="form-group">
                               <input id="subscribe" type="email" className="form-control" placeholder="Please Enter Email"/>
                           </div>
                           
                               <button className="btn-3 ">submit</button>
                         
                       </form>
                         
                   </div>
              
               </div>
                  
            </>
        )
    }
}
