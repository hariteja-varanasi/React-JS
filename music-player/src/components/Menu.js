import React, { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";

function Menu(props) {

    const CLIENT_ID = "f76f921c15904342a3a916839089aced"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token);
    })

    return (
        <nav className="nav navbar navbar-expand-lg navbar-dark bg-info">
            <div className="container-fluid">
                <NavLink to={`/`} className="navbar-brand fs-3">Music Player</NavLink>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/home`} className="nav-link fs-3">Home</NavLink>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <NavLink to={`/track/1`} className="nav-link fs-3">Track</NavLink>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <NavLink to={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="nav-link fs-3">Login to Spotify</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;