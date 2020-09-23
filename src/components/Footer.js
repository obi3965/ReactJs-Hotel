import React, { Component } from "react";

import { Link } from "react-router-dom";
import './styles/Footer.css'
export default class Footer extends Component {
    

  render() {
      
    return (
      <div className="footer">
        <footer className="footer-site">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>about</h6>
                <p className="text-justify">
                   Hi everyone we are here to hear from our all customers,
                   we want our customers to be fully satisfied with the services.
                   if not please inform us , what we can do more...
                </p>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>home</h6>
                <ul className="footer-links">
                  <li>
                    <Link to="">C</Link>
                  </li>
                  <li>
                    <Link to="">
                      help desk
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      services
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      Java
                    </Link>
                  </li>
                  
                </ul>
              </div>
              <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/rooms">rooms</Link></li>
              <li><Link to="/rooms" >features</Link></li>
              <li><Link to="">Sitemap</Link></li>
            </ul>
              </div>
            </div>
          </div>
          <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <Link to="#">TRVL</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook" to="#"><i className="fa fa-facebook"></i></Link></li>
              <li><Link className="twitter" to="#"><i className="fa fa-twitter"></i></Link></li>
              <li><Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link></li>
              <li><Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link></li>   
            </ul>
          </div>
        </div>
      </div>
        </footer>
      </div>
    );
  }
}
