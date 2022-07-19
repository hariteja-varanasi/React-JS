import React from 'react';
import {NavLink} from "react-router-dom";

function Menu(props) {
    return (
        <nav className="nav navbar navbar-expand-lg navbar-collapse bg-warning">
            <div className="container-fluid">
                <NavLink to={`/`} className="navbar-brand fs-3">CRUD</NavLink>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className={"navbar-toggler-icon"}></span>
                </button>

                <div className={"collapse navbar-collapse"} id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/users`} className="nav-link fs-3">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/create`} className="nav-link fs-3">Create</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;