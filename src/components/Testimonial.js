
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/styles/Testimonial.css"



export default class Testimonial extends Component {
  state = {
        items: [
          {
            id: 1,
            title: "supporter",
            image: "../img/profile-2.jpg",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
            phone: <i class="fas fa-phone"></i>,
            twitter:<i className="fa fa-twitter"></i>,
            facebook:<i className="fa fa-facebook"></i>
          },
          {
            id: 2,
            title: "receptionist",
            image: "../img/female-3.jpg",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
              phone: <i class="fas fa-phone"></i>,
              twitter:<i className="fa fa-twitter"></i>,
              facebook:<i className="fa fa-facebook"></i>
            },
          {
            id: 3,
            title: "cook",
            image: "../img/profile-3.jpg",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
              phone: <i class="fas fa-phone"></i>,
              twitter:<i className="fa fa-twitter"></i>,
              facebook:<i className="fa fa-facebook"></i>
          },
          {
            id: 4,
            title: "electric",
            image: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
              phone: <i class="fas fa-phone"></i>,
              twitter:<i className="fa fa-twitter"></i>,
              facebook:<i className="fa fa-facebook"></i>
          },
          {
            id: 5,
            title: "cleaner",
            image: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
              phone: <i class="fas fa-phone"></i>,
              twitter:<i className="fa fa-twitter"></i>,
              facebook:<i className="fa fa-facebook"></i>
          },
          {
            id: 6,
            title: "serviceman",
            image: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
              phone: <i class="fas fa-phone"></i>,
              twitter:<i className="fa fa-twitter"></i>,
              facebook:<i className="fa fa-facebook"></i>
          },
        ],
      };
  render() {
    const { items } = this.state;

    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      
      
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
       
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      
    };
    return (
      <div className="testimonial">
      <div className="container">
        <div className="testimonial-title">
        <h2> our teams </h2>
        <div className="underline-2"></div>
        </div>
        
        <Slider {...settings}>
          {items.map(item =>
            <div key={item.id} className="item">
              <div className="item-box">
                <div className="item-img">
                   <img src={ item.image } alt=""/>
                </div>
             
             <h4>{item.title}</h4>
             <div className="item-desc">
               <p>{ item.desc }</p>
             </div>
             
              </div>
             
               <div className="testimonial-links">
                 <span>{item.phone}</span>
                  <span>{item.facebook}</span>
                 <span>{item.twitter}</span>
               </div>
           </div>
            )}
           
          
           
        </Slider>
      </div>
      </div>
    );
  }
  
}