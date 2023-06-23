import React, { useEffect, useState } from 'react'
import GlobalStats from '../components/HomeComponents/GlobalStats';
import '../styles/Home.css'
import '../index.css';
import axios from 'axios';
import Loader from '../components/Loader';
import TopTenCoins from '../components/HomeComponents/TopTenCoins';
import TopTenNews from '../components/HomeComponents/TopTenNews';
import Footer from '../components/Footer';



const CoinsOptions = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "10",
    offset: "0",
  },
  headers: {
    "X-RapidAPI-Key": "728cac0fc2msh3fd440b5ac1fa6dp1db2bfjsn23d2877f847d",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};



const NewsOptions = {
  method: "GET",
  url: "https://bing-news-search1.p.rapidapi.com/news/search",
  params: {
    q: "cryptocurrency",
    count: "10",
    freshness: "day",
    textFormat: "Raw",
    safeSearch: "Off",
  },
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "728cac0fc2msh3fd440b5ac1fa6dp1db2bfjsn23d2877f847d",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};


const Home = () => {
  const [coinsData, setcoinsData] = useState();
  const [newsData, setNewsData] = useState();
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(CoinsOptions);
        const newsResponse = await axios.request(NewsOptions);
        const {data} = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`,
          "crossDomain: true"
        );
        setLoading(false);
        setcoinsData(response.data.data);
        setCoins(data);
        setNewsData(newsResponse.data);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    
    fetchData();
  }, []);
  

  if(loading) return <Loader />;

  return (
    <div className="home-wrapper">
      <h1 style={{ textAlign: "center" }} className="page-title">
        Home
      </h1>
      <div className="section-wrapper">
        <GlobalStats data={coinsData} />
        <TopTenCoins coinsData={coins} />
        <TopTenNews news={newsData.value} />
        <Footer />
      </div>
    </div>
  );
}

export default Home;