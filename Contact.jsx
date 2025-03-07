import React from "react";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "../App.css"; 

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>CONTACT US</h2>
        <p><FaPhone /> +91 98765 4321</p>
        <p><FaEnvelope /> travelagency@gmail.com</p>
        <p><FaClock /> Mon-Fri - 08:00-23:00</p>
      </div>

      <div className="contact-right">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
          </div>
          <input type="email" placeholder="Email address" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">CONTACT US</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
