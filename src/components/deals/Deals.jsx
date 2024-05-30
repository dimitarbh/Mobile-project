import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { load } from 'cheerio';
import './Deals.css';

const Deals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const targetUrl = 'https://www.gsmarena.com/deals.php3';
        const response = await axios.get(`${proxyUrl}${encodeURIComponent(targetUrl)}`);

        const html = response.data.contents;
        const $ = load(html);

        const dealsItems = [];
        $('.pricecut').each((i, elem) => {
          if (dealsItems.length >= 9) return; 
          const link = $(elem).find('a').attr('href');
          const imageUrl = $(elem).find('img').attr('src');
          const title = $(elem).find('h3').text();
          const price = $(elem).find('.price').text().trim();
          dealsItems.push({ title, link: `${link}`, imageUrl, price });
        });

        setDeals(dealsItems);
      } catch (error) {
        console.error('Error fetching deals:', error);
      }
    };

    fetchDeals();
  }, []);

  return (
    <div className="deals-container">
      <h2 className="title">Deals</h2>
      <div className="deals-items">
        {deals.map((item, index) => (
          <div key={index} className="deals-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
              <h3>{item.price}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
