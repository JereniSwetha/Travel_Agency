import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

export default function Bus() {
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();
  const buses = [
    {
      name: 'KPN Travels',
      logo: 'https://th.bing.com/th?id=OIP.Eg9g8MPb6_xUiiczya3sagHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      price: '₹1,000',
      departure: 'CBE',
      depTime: '09:00',
      arrival: 'CHE',
      arrTime: '14:00',
      duration: '5h 00m',
      type: 'Sleeper'
    },
    {
      name: 'Parveen Travels',
      logo: 'https://th.bing.com/th?id=OIP.lrgjNVXOgTGe6GJ-RsXuYAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      price: '₹1,200',
      departure: 'BOM',
      depTime: '18:00',
      arrival: 'DEL',
      arrTime: '08:00',
      duration: '14h 00m',
      type: 'AC'
    },
    {
      name: 'SRS Travels',
      logo: 'https://th.bing.com/th?id=OIP.0ge-o5Hi7FDUUeT6DoYOvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      price: '₹1,500',
      departure: 'BLR',
      depTime: '22:00',
      arrival: 'HYD',
      arrTime: '05:00',
      duration: '7h 00m',
      type: 'Volvo'
    },
    {
      name: 'VRL Travels',
      logo: 'https://th.bing.com/th?id=OIP.foPqLDliuoRurq5gqiQx0AAAAA&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      price: '₹1,800',
      departure: 'CHE',
      depTime: '08:00',
      arrival: 'BOM',
      arrTime: '20:00',
      duration: '12h 00m',
      type: 'Non-AC'
    },
  ];

  const handleBusSelection = (bus) => {
    setSelectedBus(bus);
  };

  const handleCategorySelection = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleBooking = () => {
    if (selectedBus && selectedCategory) {
      navigate('/bus-ticket', { state: { bus: selectedBus, category: selectedCategory } });
    } else {
      alert("Please select a bus and category before booking.");
    }
  };
  

  return (
    <div className="BusBodyb">
      <br></br>
      <h1>Available Buses</h1>
      <div className="Containerb">
        {buses.map((bus, index) => (
          <div className={`bus-cardb ${selectedBus?.name === bus.name ? 'selectedb' : ''}`} key={index} onClick={() => handleBusSelection(bus)}>
            <div className="bus-headerb">
              <img src={bus.logo} alt={bus.name} className="bus-logob" />
              <span className="bus-nameb">{bus.name}</span>
              <input type="radio" name="bus-selectionb" className="bus-radiob" value={bus.name} checked={selectedBus?.name === bus.name} onChange={() => handleBusSelection(bus)} />
              <span className="bus-priceb">{bus.price}</span>
            </div>
            <div className="bus-infob">
              <div className="departureb">
                <span className="city-codeb">{bus.departure}</span>
                <span className="timeb">{bus.depTime}</span>
                <span className="locationb">Departure</span>
              </div>
              <div className="durationb">
                <span className="travel-timeb">{bus.duration}</span>
              </div>
              <div className="arrivalb">
                <span className="timeb">{bus.arrTime}</span>
                <span className="city-codeb">{bus.arrival}</span>
                <span className="locationb">Arrival</span>
              </div>
            </div>
            <div className="bus-footerb">
              <span className="classb">{bus.type}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="category-selectionb"><br></br>
      <center>
        <label>Select Category:</label>
        <select value={selectedCategory} onChange={handleCategorySelection}>
          <option value="">Select</option>
          <option value="Sleeper">Sleeper</option>
          <option value="AC">AC</option>
          <option value="Volvo">Volvo</option>
          <option value="Non-AC">Non-AC</option>
        </select>
        </center>
      </div>
      
      <button className="book-buttonb" onClick={handleBooking}>Book Ticket</button>
    </div>
  );
}
