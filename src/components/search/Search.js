import React from "react";
import "./Search.scss";
import { useWeather } from "../../provider/weatherContext";

function Search() {
    const { city, setCity, searchByCity } = useWeather();
    return (
        <div className="Search">
            <input
                value={city}
                type="text"
                placeholder="Search by city ..."
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={searchByCity} className="search-button">
                Search
            </button>
        </div>
    );
}

export default Search;
