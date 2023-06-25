import React , {useState} from "react";
import "./hiddenPassword.scss";
import { Navigate, useNavigate } from "react-router-dom";

const HiddenPassword=()=>{
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginClick, setLoginClick] = useState(false);

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
    if( (password==="252317"|| password==="232517" || password==="172325"))
    {
    setLoginClick(true);
    navigate("/hidden");
    }
    else
    {
      alert('Unauthorized Login !! Don t be over Smart');
    }
  };

  return(
    <div className='login-screen' >
    {/* <img src={background_theme} className='background_theme'/> */}
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        
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
            className={`login-button ${!password ? 'disabled' : ''}`}
            onClick={handleLogin}
            disabled={!password}
          >
            Login
          </button>
        </div>

        
      </form>
    </div>
    </div>


)}

export default HiddenPassword;