#About
import React from "react";
import { Element } from "react-scroll";
import "../App.css"; 

const About = () => {
  return (
    <Element name="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Travel Essentials"
          />
        </div>

        <div className="about-content">
          <h1>About Us</h1>
          <hr className="about-underline" />
          <p>
            Welcome to your one-stop platform for booking airline, train, and bus tickets. 
            We simplify travel planning by offering a seamless booking experience, competitive 
            prices, and extensive route networks. Your journey begins here.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
