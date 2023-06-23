import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/Coinpage.css";
import axios from "axios";
import Loader from "../components/Loader";
import HTMLReactParser from "html-react-parser";
import Footer from "../components/Footer";
import Chart from "../components/Chart";

const demoImage =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const CoinPage = () => {
  const params = useParams();
  const [coinData, setCoinData] = useState();
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const [coinHistory, setCoinHistory] = useState([]);
  const [days, setDays] = useState("24h");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${params.id}`
        );
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoinData(response.data);
        setCoinHistory(data.prices);
        console.log(data.prices);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, days]);

  if (loading) return <Loader />;

  return (
    <div className="coinpage-container">
      {/* -------------Top-Page-Path-Content------------- */}
      <div className="path-container">
        <div className="path-info">
          <Link to={"/coins"}>Coins</Link>{" "}
          <i className="ri-arrow-right-s-line"></i>{" "}
          <p className="coin-id">{params.id}</p>
        </div>

        <div className="select-dropdown">
          <select
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
          >
            <option value="inr">INR</option>
            <option value="usd">USD</option>
          </select>
        </div>
      </div>

      {/* -------------Top-Page-Path-Content------------- */}
      <div className="coin-details-container">
        <div className="coin-detail-header">
          <span className="c-rank">Rank #{coinData?.market_cap_rank}</span>

          <div className="coin-img-name">
            <img
              src={coinData?.image?.small || demoImage}
              alt="coinicon"
              width={50}
            />

            <h3 className="cname">{coinData.id}</h3>
            <p className="csymbol">{coinData.symbol}</p>
          </div>

          <div className="cprice-details">
            <p className="cprice">
              {currency === "inr" ? "₹" : "$"}
              {currency === "inr"
                ? coinData?.market_data?.current_price?.inr.toLocaleString(
                    "en-IN"
                  )
                : coinData?.market_data?.current_price?.usd.toLocaleString(
                    "en-US"
                  )}
            </p>

            <div className="coin-statuss">
              {coinData.market_data.market_cap_change_percentage_24h > 0 ? (
                <span
                  className="cstatus-icon-green"
                  style={{ color: "#4eaf0a" }}
                >
                  <i className="ri-arrow-up-s-fill"></i>
                </span>
              ) : (
                <span className="cstatus-icon-red" style={{ color: "#e15241" }}>
                  <i className="ri-arrow-down-s-fill"></i>
                </span>
              )}
              <span
                className="coin-statuss"
                style={{
                  color:
                    coinData.market_data.market_cap_change_percentage_24h > 0
                      ? "#4eaf0a"
                      : "#e15241",
                }}
              >
                {coinData.market_data.market_cap_change_percentage_24h.toFixed(
                  3
                )}
                %
              </span>
            </div>
          </div>
        </div>

        {/* Coin-Stats-Content */}
        <div className="coin-stats-container">
          <ul className="market-data-list">
            <li className="md-item">
              <p className="data-name">Market Cap</p>
              <p className="data-value">
                {currency === "inr" ? "₹" : "$"}
                {currency === "inr"
                  ? coinData.market_data.market_cap.inr.toLocaleString("en-IN")
                  : coinData.market_data.market_cap.usd.toLocaleString("en-US")}
              </p>
            </li>

            <li className="md-item">
              <p className="data-name">Fully Diluted Valuation</p>
              <p className="data-value">
                {currency === "inr" ? "₹" : "$"}
                {currency === "inr"
                  ? coinData.market_data.fully_diluted_valuation.inr.toLocaleString(
                      "en-IN"
                    )
                  : coinData.market_data.fully_diluted_valuation.usd.toLocaleString(
                      "en-US"
                    )}
              </p>
            </li>

            <li className="md-item">
              <p className="data-name">Circulating Supply</p>
              <p className="data-value">
                {coinData.market_data?.circulating_supply?.toLocaleString(
                  "en-US"
                ) || "No Data"}
              </p>
            </li>
            <li className="md-item">
              <p className="data-name">Total Supply</p>
              <p className="data-value">
                {coinData.market_data?.total_supply?.toLocaleString("en-US") ||
                  "No Data"}
              </p>
            </li>
            <li className="md-item">
              <p className="data-name">Max Supply</p>
              <p className="data-value">
                {coinData.market_data?.max_supply?.toLocaleString("en-US") ||
                  "No Data"}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <Chart
        currency={currency}
        days={days}
        time={coinData.last_updated}
        arr={coinHistory}
      />

      <div className="btn-container">
        <button
          className="btn btn-1"
          onClick={(e) => {
            setDays("24h");
          }}
        >
          24h
        </button>
        <button
          className="btn"
          onClick={(e) => {
            setDays("7d");
          }}
        >
          7d
        </button>
        <button
          className="btn"
          onClick={(e) => {
            setDays("14d");
          }}
        >
          14d
        </button>
        <button
          className="btn"
          onClick={(e) => {
            setDays("30d");
          }}
        >
          30d
        </button>
        <button
          className="btn"
          onClick={(e) => {
            setDays("90d");
          }}
        >
          90d
        </button>
        <button
          className="btn"
          onClick={(e) => {
            setDays("180d");
          }}
        >
          180d
        </button>
        <button
          className="btn"
          onClick={(e) => {
            setDays("365d");
          }}
        >
          1y
        </button>
        <button
          className="btn"
          onClick={(e) => {
            setDays("max");
          }}
        >
          Max
        </button>
      </div>

      {/* Coin-Desccription-Content  */}
      {coinData.description.en ? (
        <div className="desc-container">
          <h3>What is {coinData.name}</h3>
          <p className="desc">{HTMLReactParser(coinData.description.en)}</p>
        </div>
      ) : null}

      <Footer />
    </div>
  );
};

export default CoinPage;
