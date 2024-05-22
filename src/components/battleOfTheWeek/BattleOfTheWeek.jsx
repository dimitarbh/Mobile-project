import React, { useState } from 'react';
import './BattleOfTheWeek.css';

const BattleOfTheWeek = () => {
    const smartphones = [
        {
            id: 1,
            imageUrl: "https://th.bing.com/th/id/OIP.eVHvVU7_ZM8_WbpBANyBFQHaHa?w=169&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7",
            title: "IPhone 15 Pro Max",
        },
        {
            id: 2,
            imageUrl: "https://th.bing.com/th/id/OIP.2DZXzpr_ru25KHI-aVDhPgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7",
            title: "Samsung S23 Ultra",
        },
    ];

    const [votes, setVotes] = useState({ 1: 0, 2: 0 });

    const handleVote = (id) => {
        setVotes((prevVotes) => ({ ...prevVotes, [id]: prevVotes[id] + 1 }));
    };

    return (
        <div className='battleOfTheWeek-container'>
            <h2>Battle of the Week</h2>
            <div className="battle-phones">
                {smartphones.map((phone) => (
                    <div key={phone.id} className="battle-phone">
                        <img src={phone.imageUrl} alt={phone.title} className="battle-phone-image" />
                        <div className="battle-phone-details">
                            <p>{phone.title}</p>
                            <button variant={"primary" } onClick={() => handleVote(phone.id)}>
                                Vote for this Phone
                            </button>
                            <p>Votes: {votes[phone.id]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BattleOfTheWeek;
