import React, { useEffect, useState } from "react";
import "../styles/Exchanges.css";
import ExchCard from "../components/ExchCard";
import Loader from "../components/Loader";
import axios from "axios";
import Footer from "../components/Footer";

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    limit: "100",
    offset: "0",
    orderBy: "24hVolume",
    orderDirection: "desc",
  },
  headers: {
    "X-RapidAPI-Key": "728cac0fc2msh3fd440b5ac1fa6dp1db2bfjsn23d2877f847d",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

const Exchanges = () => {
  const [exchanges, setExchanges] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setLoading(false);
        setExchanges(response.data);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="home-wrapper">
      <h1 style={{ textAlign: "center" }} className="page-title">Exchanges</h1>
      <div className="section-wrapper">
        <div className="exchanges-wrapper">
          {exchanges.data.exchanges.map((exch) => {
            return <ExchCard key={exch.uuid} exchange={exch} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exchanges;
