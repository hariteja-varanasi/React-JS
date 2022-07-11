import React from 'react';
import { NavLink, Link } from "react-router-dom";

function Menu(props) {

    return (
        <nav className="nav navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container-fluid">
                <NavLink to={`/`} className="navbar-brand fs-3">Music Player</NavLink>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/home`} className="nav-link fs-3">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/track/1`} className="nav-link fs-3">Track</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;