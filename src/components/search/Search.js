import React, { useEffect } from "react";
import "./Search.scss";
import { useWeather } from "../../provider/weatherContext";
import { FaSearch } from "react-icons/fa";

function Search() {
    const { city, setCity, searchByCity } = useWeather();
    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            searchByCity(city);
        }
    };
    useEffect(() => {
        searchByCity("delhi");
    }, []);
    return (
        <div className="Search" onSubmit={() => handleSubmit()}>
            <FaSearch className="search-icon" />
            <input
                type="text"
                placeholder="Search by city ..."
                onKeyDown={(e) => handleSubmit(e)}
                onChange={(e) => {
                    setCity(e.target.value);
                }}
            />
        </div>
    );
}

export default Search;
