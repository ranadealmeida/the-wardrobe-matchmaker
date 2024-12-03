import React, { useState, useEffect } from 'react';
import './styles.css';

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setData(['Welcome to your wardrobe, [username]!']);
        }, 1000);
    }, []);

    return (
        <div className="homepage">
            <div className="greeting-header">
                <h1>The Wardrobe Matchmaker</h1>
                {data.length ? (
                    <ul className="greeting-list">
                        {data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default HomePage;