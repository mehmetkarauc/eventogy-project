import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [emailValue, setEmailValue] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const [loggingStatus, setLoggingStatus] = useState();
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  // localStorage.setItem("authenticated", false);
  
  function loginCheck(e) {
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
    
    fetch('https://laravel-api.albrecht.uk.com/api/users/login', options)
      .then(response => response.json())
      .then(response => { 
        if (response.code === 200) {
          setAuthenticated(true);
          localStorage.setItem("authenticated", "true");
          navigate('home');
        } else {
          setLoggingStatus('Wrong Credentials');
        }
      })
      .catch(err => console.error("err", err));
  }

  return (
    <div id='login'>
      <form onSubmit={loginCheck}>
        <h1> Login Page </h1>
        <label>
          Email: 
          <input type='email' onChange={(e) => setEmailValue(e.target.value)} required></input>
        </label>
        <label>
          Password:
          <input type='password' onChange={(e) => setPasswordValue(e.target.value)} required></input>
        </label>
        <input type='submit' value='Submit'/>
      </form>
      <p>{loggingStatus}</p>
      <button onClick={() => navigate('register')}>Register</button>
    </div>
  )
}

export default Login;