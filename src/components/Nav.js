import React from 'react';
import { NavLink } from 'react-router-dom'

function Nav() {

    return (<nav className="nav">
        <ul className="nav-links">
            <NavLink to="/Meme" activeStyle={{ color: "black", fontSize: 25 }}><li>Meme</li></NavLink>
            <NavLink to="/Shop" activeStyle={{ color: "black", fontSize: 25 }}><li>ShoppingApp</li></NavLink>
        </ul>
    </nav>);
}


export default Nav;