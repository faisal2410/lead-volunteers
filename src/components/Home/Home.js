import React, { useState } from 'react';
import "./Home.css";

const Home = () => {
    const [count,setCount]=useState(0);
    const increaseCount=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <button onClick={increaseCount}>Click Me</button>
            <br/>
            <p>Count: {count}</p>
            <p><small>Double Count:{count * 2}</small></p>
        </div>
    );
};

export default Home;