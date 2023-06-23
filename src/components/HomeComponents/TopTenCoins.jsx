import React from 'react'
import Coin from '../Coin';
import { Link } from 'react-router-dom';

const TopTenCoins = ({coinsData}) => {
  return (
    <div className="ttc-container">
      <div className="ttc-header">
        <h2 className=" title-2">Top Ten Coins</h2>

        <Link to={"/coins"} className="more-btn">
          More Coin's <i className="ri-arrow-right-s-line"></i>
        </Link>
      </div>

      <div className="coins-wrapper">
        {coinsData.map((coin) => {
          return <Coin coin={coin} key={coin.id} />;
        })}
      </div>
    </div>
  );
}

export default TopTenCoins;