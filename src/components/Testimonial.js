// import React, { Component } from "react";
// import Slider from "react-slick";

// class Testimonial extends Component {
//   constructor(props) {
//     super(props);
//     this.play = this.play.bind(this);
//     this.pause = this.pause.bind(this);
//   }
//   state = {
//     items: [
//       {
//         id: 1,
//         title: "supporter",
//         image: "../img/profile-2.jpg",
//         desc:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
//         phone: <i class="fas fa-phone"></i>,
//       },
//       {
//         id: 2,
//         title: "receptionist",
//         image: "../img/female-3.jpg",
//         desc:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
//       },
//       {
//         id: 3,
//         title: "cook",
//         image: "../img/profile-3.jpg",
//         desc:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
//       },
//       {
//         id: 4,
//         title: "electric",
//         image: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png",
//         desc:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
//       },
//       {
//         id: 5,
//         title: "cleaner",
//         image: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png",
//         desc:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
//       },
//       {
//         id: 6,
//         title: "serviceman",
//         image: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png",
//         desc:
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
//       },
//     ],
//   };
//   render() {

//      const { items } = this.state;
//      const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000
//     };
//     return (
//       <div className="testimonial">
//         <div className="container-fluid">
//         <Slider ref={slider => (this.slider = slider)} {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//         </div>
//       </div>
//     );
//   }
// }

// // {items.map((item) => (  
// //   <Item key={item.id} className="col-box">
// //        1
// //   </Item>
 
// //  ))}

// export default Testimonial;



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
          },
          {
            id: 2,
            title: "receptionist",
            image: "../img/female-3.jpg",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
          },
          {
            id: 3,
            title: "cook",
            image: "../img/profile-3.jpg",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
          },
          {
            id: 4,
            title: "electric",
            image: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
          },
          {
            id: 5,
            title: "cleaner",
            image: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
          },
          {
            id: 6,
            title: "serviceman",
            image: "https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_02.png",
            desc:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reprehenderit itaque eos quibusdam nihil nostrum?",
          },
        ],
      };
  render() {
    const { items } = this.state;

    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
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
             
             <h1>{item.title}</h1>
             <p>{ item.desc }</p>
              </div>
             
           </div>
            )}
           
          
           
        </Slider>
      </div>
      </div>
    );
  }
  
}