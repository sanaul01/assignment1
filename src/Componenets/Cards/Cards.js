import React from 'react';
import "./Cards.css";
import page1 from '../../images/Page1.jpg';
import page2 from '../../images/Page2.jpg';
import page3 from '../../images/Page3.jpg';

const Cards = () => {
    return (
        <div className="cards">
            <div className="c-left">
                <div className="slide-container">
                    <span className="slider-span" id="slider-span1"></span>
                    <span className="slider-span" id="slider-span2"></span>
                    <span className="slider-span" id="slider-span3"></span>
                </div>
                <div className="image-slider">
                    <div className="slide-div" id="slide-1">
                        <img src={page1} alt="" className="img" id="img1"/>
                        <a href="#slider-span1" className="button" id="button-1"></a>
                    </div>
                    <div className="slide-div" id="slide-2">
                        <img src={page2} alt="" className="img" id="img2"/>
                        <a href="#slider-span2" className="button" id="button-2"></a>
                    </div>
                    <div className="slide-div" id="slide-3">
                        <img src={page3} alt="" className="img" id="img3"/>
                        <a href="#slider-span3" className="button" id="button-3"></a>
                    </div>
                    
                </div>
            </div>
            <div className="c-right">
                this is right site
            </div>
        </div>
    );
};

export default Cards;