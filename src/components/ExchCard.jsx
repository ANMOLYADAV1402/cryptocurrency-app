import React from 'react';
import '../styles/Exchanges.css';
import { Link } from 'react-router-dom';

const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const ExchCard = ({exchange}) => {
  return (
    <Link to={exchange.coinrankingUrl} target='blank'>
      <div className="exchange-card">
        <div className="exch-header">
          <img src={exchange?.iconUrl || demoImage} alt="" />

          <p className="exch-name">{exchange.name}</p>
        </div>

        <p className="exch-price">
          Price{" "}
          <span className="exch-value">
            ${((exchange.price * 100) / 100).toFixed(2)}
          </span>
        </p>
        <p className="exch-24h-vol">
          24h Volume{" "}
          <span className="exch-value">
            {Intl.NumberFormat("en", { notation: "compact" }).format(
              exchange["24hVolume"]
            )}
          </span>
        </p>
      </div>
    </Link>
  );
}

export default ExchCard;