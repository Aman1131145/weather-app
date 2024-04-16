import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from "react-redux";
import { WeatherContext } from "./weatherContext";
import * as WeatherThunkActions from "../thunks/weather";
import * as WeatherActions from "../reducers/weather";
export const WeatherProvider = ({ children }) => {
    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.weather);

    const [error, setError] = useState(undefined);
    const [info, setInfo] = useState(undefined);
    const [city, setCity] = useState("");
    
    const hideError = () => {
        setError(undefined);
        dispatch(WeatherActions.setError(false));
    };

    const searchByCity = () => {
        if (city && city !== "") {
            console.log('search by city');
            dispatch(WeatherThunkActions.getWeatherByCity({ city }));
        }
    };

    const contextValue = {
        dispatch,
        error,
        hideError,
        city,
        setCity,
        info,
        setInfo,
        weatherData,
        searchByCity,
    };
    return (
        <WeatherContext.Provider value={contextValue}>
            {children}
        </WeatherContext.Provider>
    );
};

WeatherProvider.propTypes = {
    children: PropTypes.node.isRequired
}