import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));
  const currentUserEmail = JSON.parse(localStorage.getItem("currentUserEmail"));
  const navigate = useNavigate();

  // Function to handle logout process
  function handleLogout() {
    localStorage.clear();
    setAuthenticated("false");
    navigate(-1);
  }

  // Check if user is authenticated otherwise navigate back to login
  useEffect(() => {
    if (authenticated !== true) {
      navigate('/');
    }
  }, [authenticated] );

    return (
      <>
        {authenticated === "true" &&
        <div id='home'>
            <div>
              <p>User: {currentUserEmail}</p>
              <button onClick={() => navigate('/home/account')}>Account</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <h1>Home</h1>
        </div>
        }
      </>
    )
}

export default Home;