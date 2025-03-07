import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; 

const SignIn = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    alert("Google Sign-In Clicked!");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert("You have been logged in Successfully");
    navigate("/service", { replace: true }); 
  };
  
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter your username" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
        <p>OR</p>
        <button onClick={handleGoogleSignIn} className="google-btn">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
