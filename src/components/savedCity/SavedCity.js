import React from "react";
import "./SavedCity.scss";
import { useWeather } from "../../provider/weatherContext";
import { setError } from "../../reducers/weather";

function SavedCity({ city }) {
    const { setCity, searchByCity } = useWeather();

    const capitalizeFirstLetter = (str) => {
        return str
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    const handleClick = () => {
        searchByCity(city);
    };
    const mouseDown = () => {
        setCity(city)
    }

    return (
        <div className="SavedCity" onMouseDown={mouseDown} onClick={handleClick}>
            <p>{capitalizeFirstLetter(city)}</p>
        </div>
    );
}

export default SavedCity;
