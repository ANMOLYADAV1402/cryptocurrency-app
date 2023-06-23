import React from 'react';
import '../App.css';

const Coin = ({coin}) => {
  return (
    <div
      className="coin-box"
      onClick={() => window.open(`/coins/${coin.id}`, "_self")}
    >
      <div className="coin-header">
        <img src={coin.image} alt="" width={30} />
        <p className="coin-name">{coin.name}</p>
      </div>

      <p className="coin-price">
        ₹ {coin.current_price.toLocaleString("en-IN")} {coin.symbol}
      </p>

      <div className="coin-status">
        {coin.market_cap_change_percentage_24h > 0 ? (
          <span className="status-icon-green">
            <i className="ri-arrow-right-up-line"></i>
          </span>
        ) : (
          <span className="status-icon-red">
            <i className="ri-arrow-right-down-line"></i>
          </span>
        )}
        <span className="coin-status">
          {coin.market_cap_change_percentage_24h}%
        </span>
      </div>
    </div>
  );
}

export default Coin;