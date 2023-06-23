import React from 'react'
import '../App.css';
import Coinranking from '../images/coingecko.png';




const Footer = () => {
  return (
    <div className="footer-container">
      <p className="rights">Made with ❤ by Anmol</p>

      <div className="powered-by-box">
        <p className="powered-by">
          Powered by <img src={Coinranking} alt='coinranking' className="powered-by-img" />
          <span className="powered-by-text">CoinGecko API</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;