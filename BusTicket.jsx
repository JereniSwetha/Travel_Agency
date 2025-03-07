import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import '../App.css';

const BusTicket = () => {
  const location = useLocation();
  const navigate = useNavigate();  
  const { bus, category } = location.state;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    console.log({
      name,
      age,
      gender,
      phone,
      email,
      address,
      bus,
      category
    });
    window.alert('Ticket has been successfully booked. Have a safe journey!');
    navigate('/'); 
  };

  return (
    <div className="BusTicketBodybt">
      <br></br>
      <br></br>
      <h1>Bus Ticket Confirmation</h1>
      <form className="booking-form" onSubmit={handleConfirmBooking}>
        <div className="form-row">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <label>Age:</label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-row">
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div className="form-row">
          <label>Travels:</label>
          <input type="text" value={bus.name} readOnly />
          <label>Type:</label>
          <input type="text" value={bus.type} readOnly />
          <label>Category:</label>
          <input type="text" value={category} readOnly />
        </div>
        <div className="form-row">
          <label>Departure Time:</label>
          <input type="text" value={bus.depTime} readOnly />
          <label>Arrival Time:</label>
          <input type="text" value={bus.arrTime} readOnly />
          <label>Duration:</label>
          <input type="text" value={bus.duration} readOnly />
        </div>
        <div className="form-row">
          <label>Departure Location:</label>
          <input type="text" value={bus.departure} readOnly />
          <label>Arrival Location:</label>
          <input type="text" value={bus.arrival} readOnly />
          <label>Price:</label>
          <input type="text" value={bus.price} readOnly />
        </div>
        <button className="submit-button" type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BusTicket;
