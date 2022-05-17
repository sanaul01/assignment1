import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <div className="feature">
            <p>Features</p>
            <div className="f-content">
                <div className="f-cards">
                    <div className="f-card">
                        <div className="f-box"></div>
                        <p>Create your card
                            <br />
                            in just 5 mins</p>
                    </div>
                    <div className="f-card">
                        <div className="f-box"></div>
                        <p>Customize the Text
                            <br />
                            with "Edit this Page" Option</p>
                    </div>
                    <div className="f-card">
                        <div className="f-box"></div>
                        <p>Editing is available
                            <br />
                            after purchase also</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;