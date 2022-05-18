import React from 'react';
import Cards from '../Cards/Cards';
import './Details.css';

const Details = () => {
    return (
        <div className="d-page">
            <div className="d-bg">
                <p>Digital Card Details</p>
            </div>
            <div>
                <div className="d-container">
                    <Cards/>
                </div>
            </div>
        </div>

    );
};

export default Details;