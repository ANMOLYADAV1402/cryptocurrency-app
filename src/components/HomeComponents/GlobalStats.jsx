import React from 'react'

const GlobalStats = (props) => {
  return (
    <div className="global-status-container">
      <h2 className="global-title title-2">Global Crypto Stats</h2>

      <div className="stats-container">
        <div className="stat-item">
          <p className="stat-title">Total Coins</p>
          <p className="stat-value">{}</p>
          <p className="stat-value">
            {Intl.NumberFormat("en", { notation: "compact" }).format(
              props.data.stats.totalCoins
            )}
          </p>
        </div>
        <div className="stat-item">
          <p className="stat-title">Total 24h Volume</p>
          <p className="stat-value">
            {Intl.NumberFormat("en", { notation: "compact" }).format(
              props.data.stats.total24hVolume
            )}
          </p>
        </div>
        <div className="stat-item">
          <p className="stat-title">Total Exchanges</p>
          <p className="stat-value">
            {Intl.NumberFormat("en", { notation: "compact" }).format(
              props.data.stats.totalExchanges
            )}
          </p>
        </div>
        <div className="stat-item">
          <p className="stat-title">Total Market Cap</p>
          <p className="stat-value">
            {Intl.NumberFormat("en", { notation: "compact" }).format(
              props.data.stats.totalMarketCap
            )}
          </p>
        </div>
        <div className="stat-item">
          <p className="stat-title">Total Markets</p>
          <p className="stat-value">
            {Intl.NumberFormat("en", { notation: "compact" }).format(
              props.data.stats.totalMarkets
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default GlobalStats;