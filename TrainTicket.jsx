import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';  
import '../App.css';

const TrainTicket = () => {
    const location = useLocation();
    const navigate = useNavigate();  

    const defaultTrain = {
        name: 'Shatabdi Express',
        number: '12007',
        price: '₹1,500',
        departure: 'CBE',
        depTime: '06:00',
        arrival: 'MAS',
        arrTime: '12:00',
        duration: '6h 00m',
        type: 'AC Chair Car'
    };

    const train = location.state?.traint || defaultTrain;
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
            train
        });

        window.alert('Train ticket has been successfully booked. Have a safe journey!');
        navigate('/');  
    };

    return (
        <div className="TrainTicketBodyt">
            <ul className="navbarlistt">
                <li><Link to="/" className="navbar-linkt"><box-icon name='home'></box-icon><span>Home</span></Link></li>
                <li><Link to="/airline" className="navbar-linkt"><box-icon type='solid' name='plane-take-off'></box-icon><span>Airline</span></Link></li>
                <li><Link to="/bus" className="navbar-linkt"><box-icon name='bus' type='solid'></box-icon><span>Bus</span></Link></li>
                <li><Link to="/train" className="navbar-linkt"><box-icon name='train' type='solid'></box-icon><span>Train</span></Link></li>
            </ul>
            <h1>Train Ticket Confirmation</h1>
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
                    <label>Train Name:</label>
                    <input type="text" value={train.name} readOnly />
                    <label>Train Type:</label>
                    <input type="text" value={train.type} readOnly />
                    <label>Train Number:</label>
                    <input type="text" value={train.number} readOnly />
                </div>
                <div className="form-row">
                    <label>Departure Time:</label>
                    <input type="text" value={train.depTime} readOnly />
                    <label>Arrival Time:</label>
                    <input type="text" value={train.arrTime} readOnly />
                    <label>Duration:</label>
                    <input type="text" value={train.duration} readOnly />
                </div>
                <div className="form-row">
                    <label>Departure Location:</label>
                    <input type="text" value={train.departure} readOnly />
                    <label>Arrival Location:</label>
                    <input type="text" value={train.arrival} readOnly />
                    <label>Price:</label>
                    <input type="text" value={train.price} readOnly />
                </div>
                <button className="submit-button" type="submit">Confirm Booking</button>
            </form>
        </div>
    );
};

export default TrainTicket;
