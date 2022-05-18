import React from 'react';
import "./Cards.css";
import Slider from '../Slider/Slider';

const Cards = () => {
    return (
        <div className="cards">
            <div className="c-left">
                <Slider />
            </div>
            <div className="c-right">
                    <div className="section">
                        <span className="title">Card Title</span>
                        <div className="c-body">
                            <div className="price">
                                <span className="1">$499 <small className="small">$2000</small></span>
                                <span>75%Off</span>
                            </div>
                            <p>Donec eu ornare mi. Sed finibus
                                condimentum mauris, ut dictum eros
                                maximus vitae. Nullam
                              
                                condimentum tortor ac elit feugiat
                                iaculis. Aenean mauris nisl, blandit</p>
                        </div>
                        <button className="button">Try this Card</button>
                    </div>
            </div>
        </div>
    );
};

export default Cards;