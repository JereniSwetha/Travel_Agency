import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons';
import '../App.css';


export default function Train() {
    const [selectedTraint, setSelectedTraint] = useState(null);
    const navigate = useNavigate();
    
    const traint = [
        { name: 'Shatabdi Express', number: '12007', price: '₹1,500', departure: 'CBE', depTime: '06:00', arrival: 'MAS', arrTime: '12:00', duration: '6h 00m', type: 'AC Chair Car' },
        { name: 'Rajdhani Express', number: '12951', price: '₹2,200', departure: 'BOM', depTime: '16:00', arrival: 'DEL', arrTime: '08:00', duration: '16h 00m', type: '1A' },
        { name: 'Duronto Express', number: '12213', price: '₹1,800', departure: 'BLR', depTime: '20:00', arrival: 'HYD', arrTime: '06:00', duration: '10h 00m', type: '2A' },
        { name: 'Garib Rath', number: '12611', price: '₹900', departure: 'MAS', depTime: '22:00', arrival: 'CBE', arrTime: '06:00', duration: '8h 00m', type: '3A' },
    ];

    const handleTrainSelectiont = (traint) => {
        setSelectedTraint(traint);
    };

    const handleBookingt = () => {
        if (selectedTraint) {
            navigate('/train-ticket', { state: { traint: selectedTraint } });
        } else {
            alert("Please select a train before booking.");
        }
    };

    return (
        <div className="TrainBodyt">
            <br></br>
            <h1>Available Trains</h1>
            <div className="Containert">
                {traint.map((traint, index) => (
                    <div className={`train-cardt ${selectedTraint?.number === traint.number ? 'selectedt' : ''}`} key={index} onClick={() => handleTrainSelectiont(traint)}>
                        <div className="train-headert">
                            <span className="train-namet">{traint.name} ({traint.number})</span>
                            <input type="radio" name="train-selectiont" className="train-radiot" value={traint.number} checked={selectedTraint?.number === traint.number} onChange={() => handleTrainSelectiont(traint)} />
                            <span className="train-pricet">{traint.price}</span>
                        </div>
                        <div className="train-infot">
                            <div className="departuret">
                                <span className="city-codet">{traint.departure}</span>
                                <span className="timet">{traint.depTime}</span>
                                <span className="locationt">Departure</span>
                            </div>
                            <div className="durationt">
                                <span className="travel-timet">{traint.duration}</span>
                            </div>
                            <div className="arrivalt">
                                <span className="timet">{traint.arrTime}</span>
                                <span className="city-codet">{traint.arrival}</span>
                                <span className="locationt">Arrival</span>
                            </div>
                        </div>
                        <div className="train-footert">
                            <span className="classt">{traint.type}</span>
                        </div>
                    </div>
                ))}
            </div>
            <button className="book-buttont" onClick={handleBookingt}>Book Ticket</button>
        </div>
    );
}
