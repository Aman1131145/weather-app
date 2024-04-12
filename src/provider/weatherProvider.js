import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WeatherContext } from "./weatherContext";
import * as WeatherThunkActions from "../thunks/weather";
export const WeatherProvider = ({ childern }) => {
    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.weather);

    const [error, setError] = useState(undefined);
    const [info, setInfo] = useState(undefined);
    const [modal, setModal] = useState(true);
    const [city, setCity] = useState("");

    const searchByCity = () => {
        if (city && city !== "") {
            dispatch(WeatherThunkActions.getWeatherByCity({ city }));
        }
    };
    return (
        <WeatherContext.Provider value={contextValue}>
            {childern}
        </WeatherContext.Provider>
    );
};
