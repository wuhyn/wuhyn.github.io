import * as React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar