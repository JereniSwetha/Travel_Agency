import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const BookTickets = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { flight, category } = location.state || {};

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [duration, setDuration] = useState("");
  const [stops, setStops] = useState("");
  const [classType, setClassType] = useState("Economy");
  const [basePrice, setBasePrice] = useState(0);
  const [numTickets, setNumTickets] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [seatPreference, setSeatPreference] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category || "Regular");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (flight) {
      setFrom(flight.departure);
      setTo(flight.arrival);
      setDuration(flight.duration);
      setStops(flight.stops);
      setBasePrice(parseFloat(flight.price.replace('₹', '').replace(',', '')));
      calculateTotal(selectedCategory, numTickets, parseFloat(flight.price.replace('₹', '').replace(',', '')));
    }
  }, [flight, selectedCategory, numTickets]);

  const calculateTotal = (selectedCategory, tickets, price) => {
    let discount = 0;
    if (selectedCategory === "Student (30% off)") discount = 0.3;
    else if (selectedCategory === "Senior Citizen (50% off)") discount = 0.5;

    setTotalAmount(tickets * price * (1 - discount));
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    calculateTotal(selectedCategory, numTickets, basePrice);
  };

  const handleTicketsChange = (e) => {
    const tickets = Math.max(1, parseInt(e.target.value) || 1);
    setNumTickets(tickets);
    calculateTotal(selectedCategory, tickets, basePrice);
  };

  const handlePriceChange = (e) => {
    const price = Math.max(0, parseFloat(e.target.value) || 0);
    setBasePrice(price);
    calculateTotal(selectedCategory, numTickets, price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("The ticket has been successfully booked 🥳🎉. Have a safe journey!");
    navigate('/'); 
  };

  return (
    <div className='ticketformat'> 
    <div className="booking-container">
      <h2>Book Your Flight Ticket</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        
        <div className="form-row">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
        </div>
        
        <div className="form-row">
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter your phone number" />
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        
        <div className="form-row">
          <label>Age:</label>
          <input type="number" min="0" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" />
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your address" />
        </div>
        
        <div className="form-row">
          <label>From:</label>
          <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Enter departure" />
          <label>To:</label>
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Enter destination" />
        </div>
        
        <div className="form-row">
          <label>Duration:</label>
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="e.g., 7h 00m" />
          <label>Stops:</label>
          <input type="text" value={stops} onChange={(e) => setStops(e.target.value)} placeholder="e.g., 1 Stop" />
        </div>
        
        <div className="form-row">
          <label>Class:</label>
          <select value={classType} onChange={(e) => setClassType(e.target.value)}>
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
          <label>Category:</label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option>Regular</option>
            <option>Student (30% off)</option>
            <option>Senior Citizen (50% off)</option>
          </select>
          <label>Base Price (₹):</label>
          <input type="number" min="0" value={basePrice} onChange={handlePriceChange} placeholder="Enter price" />
        </div>
        
        <div className="form-row">
          <label>Number of Tickets:</label>
          <input type="number" min="1" value={numTickets} onChange={handleTicketsChange} />
          <label>Seat Preference:</label>
          <select value={seatPreference} onChange={(e) => setSeatPreference(e.target.value)}>
            <option>Select</option>
            <option>Window</option>
            <option>Aisle</option>
            <option>Middle</option>
          </select>
        </div>
        
        <div className="form-row">
          <label>Total Amount (₹):</label>
          <input type="text" value={totalAmount.toFixed(2)} readOnly />
          <label>Payment Method:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option>Select</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>UPI</option>
            <option>Net Banking</option>
          </select>
        </div>
        
        <div className="form-buttons">
          {/* <div><button type="reset" className="reset-button">Reset</button></div> */}
          <div><button type="submit" className="submit-button">Confirm Booking</button></div>
        </div>

      </form>
    </div>
    </div>
  );
};

export default BookTickets;
