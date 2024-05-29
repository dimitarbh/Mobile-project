import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { load } from 'cheerio';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = 'https://m.gsmarena.com/news.php3';
        const response = await axios.get(`${proxyUrl}${encodeURIComponent(targetUrl)}`);

        const html = response.data.contents;
        const $ = load(html);
        const newsItems = [];

        $('.news-item').each((i, elem) => {
          const title = $(elem).find('.news-item-title').text().trim();
          const link = $(elem).find('a').attr('href');
          const imageUrl = $(elem).find('img').attr('src');

          newsItems.push({ title, link: `https://m.gsmarena.com/${link}`, imageUrl });
        });

        setNews(newsItems);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      <div className="news-items">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
              <h3>{item.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
