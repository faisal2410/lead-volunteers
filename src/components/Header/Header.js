import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/volunteers">Volunteer</Link>
            </nav>
        </div>
    );
};

export default Header;