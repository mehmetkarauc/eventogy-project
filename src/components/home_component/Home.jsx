import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../login_component/Login';

function Home() {
  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate('/');
  }

  if (authenticated === "true") {
    return (
      <div>
          <h1>Home</h1>
          <button onClick={() => navigate('account')}>Account</button>
          <button onClick={logout}>Logout</button>
      </div>
    )
  } else {
    return <Login />
  }
}

export default Home;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Login from '../login_component/Login';

// function Home() {
//   const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") === "true");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedAuthenticated = localStorage.getItem("authenticated");
//     if (storedAuthenticated === "true") {
//       setAuthenticated(true);
//     }
//   }, []);

//   console.log(authenticated);

//   if (authenticated) {
//     return (
//       <div>
//         <h1>Home</h1>
//         <button onClick={() => navigate('account')}>Account</button>
//       </div>
//     );
//   } else {
//     return <Login />;
//   }
// }

// export default Home;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Login from '../login_component/Login';

// function Home() {
//   const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated") === "true");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedAuthenticated = localStorage.getItem("authenticated");
//     if (storedAuthenticated === "true") {
//       setAuthenticated(true);
//     }
//   }, []);

//   return (
//     <>
//     {authenticated ?
//       <div>
//       <h1>Home</h1>
//       <button onClick={() => navigate('account')}>Account</button>
//       </div>
//      :
//     <Login />
//   }
//     </>
//   );

// }

// export default Home;