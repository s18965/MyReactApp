import React from 'react';
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/players">Players</Link></li>
                <li><Link to="/coaches">Coaches</Link></li>
                <li><Link to="/matches">Matches</Link></li>
        </ul>
        </nav>
    )
}

export default Navigation