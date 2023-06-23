import React from 'react';
import '../../styles/Home.css';
import { Link } from 'react-router-dom';
import NewsCard from '../NewsCard';

const TopTenNews = ({news}) => {
  return (
    <div className="ttn-container">
      <div className="ttc-header">
        <h2 className=" title-2">Latest News On Crypto</h2>

        <Link to={"/news"} className="more-btn">
          More New's <i className="ri-arrow-right-s-line"></i>
        </Link>
      </div>

      <div className="news-wrapper">
        {news.map((post, index) => {
          return <NewsCard post={post} key={index} />;
        })}
      </div>
    </div>
  );
}

export default TopTenNews;