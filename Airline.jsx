import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

export default function Airline() {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const flights = [
    { name: 'Air India', logo: 'https://th.bing.com/th?id=OIP.95gQCR-5osZO8AZ8cPfgPQHaFb&w=291&h=214&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', price: '₹10,687', departure: 'DEL', depTime: '18:00', arrival: 'BOM', arrTime: '21:05', duration: '27h 05m', stops: '1 Stop' },
    { name: 'SpiceJet', logo: 'https://th.bing.com/th/id/OIP.DzwEva8XtZwZHsDD6IkceQAAAA?pid=ImgDet&w=184&h=147&c=7&dpr=1.3', price: '₹20,000', departure: 'CHE', depTime: '08:00', arrival: 'HYD', arrTime: '13:05', duration: '5h 05m', stops: '1 Stop' },
    { name: 'Indigo', logo: 'https://th.bing.com/th/id/OIP.Gcdp5hV95fPHQvtad1xuxQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', price: '₹15,789', departure: 'CBE', depTime: '21:00', arrival: 'ADA', arrTime: '04:00', duration: '7h 00m', stops: '1 Stop' },
    { name: 'Emirates', logo: 'https://pluspng.com/img-png/emirates-airlines-logo-png-qatar-airways-logo-png-img-567-567-free-transparent-logo-900x580.jpg', price: '₹29,999', departure: 'CHE', depTime: '09:30', arrival: 'BAN', arrTime: '12:05', duration: '3h 05m', stops: '1 Stop' },
  ];

  const handleFlightSelection = (flight) => {
    setSelectedFlight(flight);
  };

  const handleCategorySelection = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleBooking = () => {
    if (selectedFlight && selectedCategory) {
      navigate('/book-tickets', { state: { flight: selectedFlight, category: selectedCategory } });
    } else {
      alert("Please select a flight and category before booking.");
    }
  };

  return (
    <div className="Airbody">
      <h1>Available Flights</h1>
      <div className="Container">
        {flights.map((flight, index) => (
          <div 
            className={`flight-card ${selectedFlight?.name === flight.name ? 'selected' : ''}`} 
            key={index} 
            onClick={() => handleFlightSelection(flight)}
          >
            <div className="flight-header">
              <img src={flight.logo} alt={flight.name} className="airline-logo" />
              <span className="airline-name">{flight.name}</span>

              <input
                type="radio"
                name="flight-selection"
                className="flight-radio"
                value={flight.name}
                checked={selectedFlight?.name === flight.name}
                onChange={() => handleFlightSelection(flight)}
              />
              
              <span className="flight-price">{flight.price}</span>
            </div>

            <div className="flight-info">
              <div className="departure">
                <span className="airport-code">{flight.departure}</span>
                <span className="time">{flight.depTime}</span>
                <span className="location">Departure</span>
              </div>

              <div className="duration">
                <span className="travel-time">{flight.duration}</span>
                <div className="stop-line"></div>
                <span className="stops">{flight.stops}</span>
              </div>

              <div className="arrival">
                <span className="time">{flight.arrTime}</span>
                <span className="airport-code">{flight.arrival}</span>
                <span className="location">Arrival</span>
              </div>
            </div>

            <div className="flight-footer">
              <span className="class">Economy</span>
            </div>
          </div>
        ))}
      </div>

      <h2>Select a Ticket Category</h2>
      <div className='box-container'>
        {["Regular", "Student (30% off)", "Senior Citizen (50% off)", "Armed Forces", "Doctor/Nurse"].map((category, index) => (
          <div className='box' key={index}>
            <input 
              type='radio' 
              name='preference' 
              value={category} 
              checked={selectedCategory === category} 
              onChange={handleCategorySelection} 
            /> 
            {category}
          </div>
        ))}
      </div>

      <button className="book-button" onClick={handleBooking}>Book Ticket</button>
    </div>
  );
}
