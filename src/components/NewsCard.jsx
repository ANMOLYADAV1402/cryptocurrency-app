import React from 'react';
import moment from "moment";
import { Link } from 'react-router-dom';

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';

const NewsCard = ({post}) => {
  return (
    <div className="newsCard-container">
      <div className="news-header">
        <h4 className="news-title">{post.name}</h4>

        <img
          src={post?.image?.thumbnail?.contentUrl || demoImage}
          alt="news img"
        />
      </div>

      <div className="news-desc">
        <p className="desc">{post.description}</p>
      </div>

      <div className="news-footer">
        <div className="news-provider">
          <img
            src={post?.provider[0]?.image?.thumbnail?.contentUrl || demoImage}
            alt="provider img"
          />
          <h5>{post.provider[0].name}</h5>
        </div>

      <div className="post-link-cont">
        <p className="publish-time">
          {moment(post.datePublished).startOf("ss").fromNow()}
        </p>

        <Link to={post.url} target="blank" className="post-link">
          Read Article <i className="ri-external-link-line"></i>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default NewsCard;