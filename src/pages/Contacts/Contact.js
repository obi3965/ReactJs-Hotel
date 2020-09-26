import React, { Component } from 'react'
import ContactForm from '../../components/ContactForm'
import { Link } from 'react-router-dom'
import '../../components/styles/Contact.css'
import Footer from '../../components/Footer'
export default class Contact extends Component {
  

  render() {
    return (
      <>
      <div className="contact-banner">
          <div className="contact-items">
            <h1>our hotel contact section</h1>
            <p>you can contact us here for 24Hrs. we are here to help you all. please be patient we will get you back as soon as possible.</p>
            <Link to="/rooms" className="btn">
          our rooms
        </Link>
          </div>
         
            </div>
              
             
      <div className="container p-5">
          <div className="row">
          <div
              className="col-md-12 contact-title"
              
            >
              <h1 className="section-title">Love to Hear From You</h1>
             <div className="underline-4"></div>
            </div>
          </div>
          <div className="row mt-4">
            <div
              className="col-md-6 mt-3">
                <div className="contact-desc">
                  <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content.
              </p>
                </div>
              
              <div className="find-widget">
                Company: <Link to="">TRVL</Link>
              </div>
              <div className="find-widget">
                Address: <Link to="">4000 Roskilde, DK</Link>
              </div>
              <div className="find-widget">
                Phone: <Link to="">+ 458909767</Link>
              </div>

              <div className="find-widget">
                Website: <Link to="">www.trvl.com</Link>
              </div>
              <div className="find-widget">
                Program: <Link to="">Mon to Sat: 09:30 AM - 10.30 PM</Link>
              </div>

              <ul className="social-icon">
              <li><Link className="facebook1" to="#"><i className="fa fa-facebook"></i></Link></li>
              <li><Link className="twitter1" to="#"><i className="fa fa-twitter"></i></Link></li>
              <li><Link className="dribbble1" to="#"><i className="fa fa-dribbble"></i></Link></li>
              <li><Link className="linkedin1" to="#"><i className="fa fa-linkedin"></i></Link></li>   
            </ul>
            </div>

          
          <div className="col-md-6 col-sm-12">
           <ContactForm />
          </div>
       
        </div>
                
        </div>

        <Footer />
       
      </>
    )
  }
}
