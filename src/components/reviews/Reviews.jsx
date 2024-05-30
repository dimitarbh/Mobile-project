    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { load } from 'cheerio';
    import './Reviews.css';

    const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
        try {
            const proxyUrl = 'https://api.allorigins.win/get?url=';
            const targetUrl = 'https://m.gsmarena.com/reviews.php3';
            const response = await axios.get(`${proxyUrl}${encodeURIComponent(targetUrl)}`);

            const html = response.data.contents;
            const $ = load(html);
            const reviewsItems = [];

            $('.reviews-item').each((i, elem) => {
            const title = $(elem).find('h2').text();
            const link = $(elem).find('a').attr('href');
            const imageUrl = $(elem).find('img').attr('src');

            reviewsItems.push({title, link: `https://m.gsmarena.com/${link}`, imageUrl });
            });

            setReviews(reviewsItems);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
        };

        fetchReviews();
    }, []);

    return (
        <div className="reviews-container">
        <h2 className="title">Latest Reviews</h2>
        <div className="reviews-items">
            {reviews.map((item, index) => (
            <div key={index} className="reviews-item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.imageUrl} alt={item.title} />
                <h3>{item.title}</h3>
                </a>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default Reviews;
