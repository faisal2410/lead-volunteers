import React from 'react';
import "./Activity.css";

const Activity = ({activity}) => {
    return (
        <div className="activity">
            <img src={activity.img} alt={activity.title} />
            <h2>{activity.title}</h2>
            
        </div>
    );
};

export default Activity;