import React from "react";
import Search from "../search/Search";
import './Navbar.scss'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="title">
                <h1>WeatherApp</h1>
            </div>
            <Search />
        </div>
    );
}

export default Navbar;
