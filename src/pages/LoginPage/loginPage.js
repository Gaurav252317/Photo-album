import React, { useState } from 'react';
import "../LoginPage/loginPage.scss";
import { Navigate, useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  //const [registerClick, setRegisterClick] = useState(false);
  //const [error,setError]=useState(null);
  const [loginClick, setLoginClick] = useState(false);

 

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login form submitted');
  };

  const handleLogin = () => {
    if(phoneNumber==="9372661852" && password==="252317")
    {
    setLoginClick(true);
    navigate("/header");
    }
    else
    {
      alert('Unauthorized Login');
    }
  };

  return (
    <div className='login-screen'>
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className='input-group'>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />
        </div>
        <div className="password-container">
          
          <div className="input-group">
            {/* <label htmlFor="password">Password</label> */}
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                required
              />
              <svg
                className={`eye-icon ${showPassword ? 'visible' : ''}`}
                onClick={handleShowPasswordToggle}
                viewBox="0 0 24 24"
              >
                <path d="M12 5.5C7 5.5 2.5 10 2.5 10S7 14.5 12 14.5S21.5 10 21.5 10S17 5.5 12 5.5M12 12.5C9.5 12.5 7.5 10.5 7.5 10.5S9.5 8.5 12 8.5S16.5 10.5 16.5 10.5S14.5 12.5 12 12.5M12 2C4.5 2 2 10 2 10S6 22 12 22S22 10 22 10S19.5 2 12 2Z" />
              </svg>
            </div>
          </div>
          {/* <button type="submit">Sign In</button> */}

          <button
            type="button"
            className={`login-button ${(!phoneNumber || !password) ? 'disabled' : ''}`}
            onClick={handleLogin}
            disabled={!phoneNumber || !password}
          >
            Login
          </button>
        </div>

        
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
