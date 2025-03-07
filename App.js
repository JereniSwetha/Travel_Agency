import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, Element, scroller } from "react-scroll";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Airline from "./Components/Airline";
import Bus from "./Components/Bus";
import Train from "./Components/Train";
import Contact from "./Components/Contact";
import BookTickets from "./Components/BookTickets";
import BusTicket from "./Components/BusTicket";
import TrainTicket from "./Components/TrainTicket";
import SignIn from "./Components/SignIn";
import "./App.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrNavigate = (section) => {
    if (location.pathname === "/") {
      scroller.scrollTo(section, { smooth: true, duration: 500 });
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {["home", "about", "service", "contact"].map((section) => (
          <li key={section}>
            <ScrollLink
              to={section}
              smooth={true}
              duration={500}
              onClick={() => handleScrollOrNavigate(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          </li>
        ))}
        <li><Link to="/airline">Airline</Link></li>
        <li><Link to="/bus">Bus</Link></li>
        <li><Link to="/train">Train</Link></li>
        <li><Link to="/signin">Sign In</Link></li> 
      </ul>
    </nav>
  );
};

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, { smooth: true, duration: 500 });
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollHandler />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Element name="home"><Home /></Element>
              <Element name="about"><About /></Element>
              <Element name="service"><Service /></Element>
              <Element name="contact"><Contact /></Element>
            </>
          }
        />

        <Route path="/airline" element={<Airline />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/train" element={<Train />} />
        <Route path="/book-tickets" element={<BookTickets />} />
        <Route path="/bus-ticket" element={<BusTicket />} /> 
        <Route path="/train-ticket" element={<TrainTicket />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
};

export default App;
