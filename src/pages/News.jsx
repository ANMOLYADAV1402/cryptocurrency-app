import React, { useEffect, useState } from "react";
import "../styles/News.css";
import axios from "axios";
import Loader from "../components/Loader";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";






const News = () => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  
  
  
  useEffect(() => {
    async function fetchData() {
      const options = {
        method: "GET",
        url: "https://bing-news-search1.p.rapidapi.com/news/search",
        params: {
          q: 'cryptocurrency',
          textFormat: "Raw",
          safeSearch: "Off",
          count: "100",
        },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "728cac0fc2msh3fd440b5ac1fa6dp1db2bfjsn23d2877f847d",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      };

      try {
        const newsResponse = await axios.request(options);
        setLoading(false);
        setNews(newsResponse.data.value);
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    }

    fetchData();
  }, []);


  if(loading) return <Loader />;

  return (
    <div className="news-container">
      <h1 style={{ textAlign: "center" }} className="page-title">
        News
      </h1>

      <div className="news-post-wrapper">
        {news.map((post, id) => {
          return <NewsCard post={post} key={id} />;
        })}
      </div>

      <Footer />
    </div>
  );
};

export default News;
