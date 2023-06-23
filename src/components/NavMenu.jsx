import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

const NavMenu = () => {
  return (
    <div className="navmenu-container">
      <div className="navigation">
        <ul>
          <li className="list">
            <NavLink to={"/"} className="nlink">
              <span className="icon">
                <i className="ri-home-7-line"></i>
              </span>
              <span className="text">Home</span>
            </NavLink>
          </li>
          <li className="list">
            <NavLink to={"/exchanges"} className="nlink">
              <span className="icon">
                <i className="ri-exchange-dollar-line"></i>
              </span>
              <span className="text">Exchanges</span>
            </NavLink>
          </li>
          <li className="list">
            <NavLink to={"/coins"} className="nlink">
              <span className="icon">
                <i className="ri-bit-coin-line"></i>
              </span>
              <span className="text">Coins</span>
            </NavLink>
          </li>
          <li className="list">
            <NavLink to={"/news"} className="nlink">
              <span className="icon">
                <i className="ri-newspaper-line"></i>
              </span>
              <span className="text">News</span>
            </NavLink>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;