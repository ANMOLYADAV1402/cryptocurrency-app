import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-container">
        <div className="nav-content">
            <span className="logo"></span>
            <Link to={'/'} className="page-name">Cryptoverse</Link>
        </div>
    </nav>
  )
}

export default NavBar;