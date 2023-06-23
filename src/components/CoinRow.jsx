import React from "react";
import '../styles/Coins.css';

const CoinRow = ({coin, curr}) => {
  return (
    <tr className="table-row" onClick={() => window.open(`/coins/${coin.id}`, "_self")}>
        <td className="coin-name">
          <div className="coin-detail">
            <img src={coin.image} alt={coin.name} width={30} />

            <div className="coin-info">
              <p className="c-name">{coin.name}</p>
              <p className="c-symbol">{coin.symbol}</p>
            </div>
          </div>
        </td>
        <td>
          {curr === "inr" ? "₹" : "$"}
          {coin.current_price.toLocaleString("en-IN")}
        </td>
        <td
          style={{
            color:
              coin.market_cap_change_percentage_24h < 0 ? "red" : "#57BD0F",
          }}
          className="none"
        >
          {coin.market_cap_change_percentage_24h}%
        </td>
        <td className="none">
          {Intl.NumberFormat("en", { notation: "compact" }).format(
            coin.market_cap
          )}
        </td>
      </tr>
  );
};

export default CoinRow;
