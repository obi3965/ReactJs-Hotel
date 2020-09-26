import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import FeaturedRooms from "../../components/FeaturedRoom";
import Banner from "../../components/Banner";
// import './Home.css'
import Testimonial from "../../components/Testimonial";
import SubscribeForm from "../../components/Subscribe-form";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <>
      <Hero></Hero>

      <Banner
        className="home-row"
        title="welcome to our five star hotel"
        subtitle="Hotel for the whole family, all year round. and a luxury stay
                for all. a place where you can enjoy the environment"
      >
        <Link to="/rooms" className="btn">
          our rooms
        </Link>
      </Banner>

      <div className="services">
        <div className="container">
          <Services />
        </div>
      </div>

      <div className="featured-rooms">
        <div className="container">
          <FeaturedRooms />
        </div>

      </div>

      <div>
        <Testimonial />
      </div>

      <div>
        <SubscribeForm />
      </div>

      
        <Footer />
      
    </>
  );
};

export default Home;
