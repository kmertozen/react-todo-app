import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
function App() {


  return (
    <>
      <nav className='w-50 m-auto navbar navbar-expand-lg navbar-light bg-white'>
        <ul className="navbar-nav mr-auto">
          <li className='nav-item active'> <Link to="/" className='nav-link'>Anasayfa</Link></li>
          <li className='nav-item'>  <Link to="/login" className='nav-link'>Giriş</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>


    </>
  );
}

export default App;
