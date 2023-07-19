import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    setAuthenticated("false");
    navigate(-1);
  }

    return (
      <>
        {authenticated === "true" &&
        <div id='home'>
            <div>
              <button onClick={() => navigate('/home/account')}>Account</button>
              <button onClick={logout}>Logout</button>
            </div>
            <h1>Home</h1>
        </div>
        }
      </>
    )
}

export default Home;