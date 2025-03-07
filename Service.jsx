import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="service-container">
      <h2 className="service-title">Our Services</h2>
      <div className="services">
        <div className="service-card" onClick={() => navigate("/airline")}>
          <img
            src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Airline"
            className="service-image"
          />
          <p className="service-name">Airline</p>
        </div>
        <div className="service-card" onClick={() => navigate("/bus")}>
          <img
            src="https://images.pexels.com/photos/3608967/pexels-photo-3608967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Bus"
            className="service-image"
          />
          <p className="service-name">Bus</p>
        </div>
        <div className="service-card" onClick={() => navigate("/train")}>
          <img
            src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Train"
            className="service-image"
          />
          <p className="service-name">Train</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
