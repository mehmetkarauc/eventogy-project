import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [emailValue, setEmailValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const [loggingStatus, setLoggingStatus] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check if the user is already authenticated
  useEffect(() => {
    if (localStorage.getItem('authenticated') === 'true') {
      setAuthenticated(true);
      navigate('/home');
    }
  }, [navigate]);

  // Function to handle the login request
  function handleLogin(e) {
    e.preventDefault();
    setLoggingStatus();

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({email: emailValue, password: passwordValue})
    };
    
    // fetch('https://laravel-api.albrecht.uk.com/api/users/login', options)
    fetch('https://landlord.deventogy.com/api/users/login', options)
      .then(response => response.json())
      .then(response => { 
        if (response.code === 200) {
          localStorage.setItem("currentUserEmail", JSON.stringify(emailValue));
          localStorage.setItem("currentUserPassword", passwordValue);
          localStorage.setItem("authenticated", "true");
          setAuthenticated(true);
          navigate('/home');
        } else {
          setLoggingStatus('Wrong Credentials');
        }
      })
      .catch(err => console.error("err", err));
  }

  return (
    <>
      {(!authenticated &&
      <div id='login'>
        <form onSubmit={handleLogin}>
          <h1>Login Page</h1>
          <label>
            Email: 
            <input type='email' placeholder='Email' onChange={(e) => setEmailValue(e.target.value)} required></input>
          </label>
          <label>
            Password:
            <input type='password' placeholder='Password' onChange={(e) => setPasswordValue(e.target.value)} required></input>
          </label>
          <input type='submit' value='Submit'/>
        </form>
        <p>{loggingStatus}</p>
        <button onClick={() => navigate('/register')}>Register</button>
      </div>
      )}
    </>
  )
}

export default Login;