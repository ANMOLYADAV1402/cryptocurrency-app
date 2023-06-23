import React, { useEffect, useState } from "react";
import "../styles/Coins.css";
import Loader from "../components/Loader";
import axios from "axios";
import CoinRow from "../components/CoinRow";
import { Pagination } from "@mui/material";
import Footer from '../components/Footer';


const Coins = () => {
  const [coins, setCoins] = useState();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [currency, setCurrency] = useState('inr');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`,
          "crossDomain: true"
        );
        setCoins(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, [currency]);

  
  const handleSearch = () => {
    return coins.filter((coin) => 
      coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search.toLocaleLowerCase())
    )
  };
  
  
  
  if(loading) return <Loader />;

  return (
    <div className="coins-page-container">
      <h1
        className="title-2"
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        Coins
      </h1>

      <div className="search-container">
        <div className="group">
          <svg className="icon-svg" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            placeholder="Search"
            type="search"
            className="input"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
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
      </div>

      <div className="all-coins-wrapper">
        <div className="coinTable">
          <table className="coinTable__table">
            <thead className="table-head">
              <tr>
                <th>Coin</th>
                <th className="small-col">Price</th>
                <th className="small-col none">24h %</th>
                <th className="small-col none">Mkt Cap</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {handleSearch()
                .slice((page - 1) * 10, (page - 1) * 10 + 10)
                .map((coin) => {
                  return <CoinRow key={coin.id} coin={coin} curr={currency} />;
                })}
            </tbody>
          </table>

          <div className="pagination">
            <Pagination count={(handleSearch()?.length / 10).toFixed(0)} onChange={(_, value) => {
              setPage(value);
              window.scrollTo(0, 0);
            }}/>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
};

export default Coins;
