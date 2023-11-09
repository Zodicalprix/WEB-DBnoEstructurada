import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Screens/Auth/Login';
import Register from './Screens/Auth/Registrar';
import Home from './Screens/Home/Home';
import estile from './Screens/Nav.module.css'


function App() {
  return (
    <Router>
      <nav className={estile.nav}>
        <ul >
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Registrar">Register</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrar" element={<Register />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;