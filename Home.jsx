import React from "react";
import { Element } from "react-scroll";
import "../App.css"; 
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Element name="home">
      <div
        className="homeh"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 className="homehead">Welcome to Our Travel App</h1>
        <div className="transparent-background intro">
          <p className="home-text">
            Welcome to our Travel App! Your ultimate destination for booking travel tickets with ease...
          </p>
        </div>
        <button className="book-now-btn" onClick={() => navigate("/signin")}>Book Now</button>
      </div>
    </Element>
  );
};

export default Home;
