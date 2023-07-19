import { Routes, Route } from 'react-router-dom';
import Login from './components/login_component/Login.jsx';
import NewUser from './components/new_user_component/NewUser.jsx';
import Home from './components/home_component/Home.jsx';
import Account from './components/account_component/Account.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/register' element={<NewUser />}/>
        <Route path='/home/account' element={<Account />}/>
      </Routes>
    </div>
  );
}

export default App;
