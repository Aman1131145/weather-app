import React from "react";
import Search from "../search/Search";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="title">
                <h1>
                    Weather Duck
                </h1>
            </div>
            <Search className="search-component" />
        </div>
    );
}

export default Navbar;
