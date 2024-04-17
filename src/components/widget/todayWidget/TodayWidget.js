import React from "react";
import "./TodayWidget.scss";
import { useWeather } from "../../../provider/weatherContext";
import Loader from "../../loader/Loader";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import {
    convertKelvinToCelcius,
    getDay,
    getWeatherIcon,
} from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { saveCity, removeCity } from "../../../reducers/savedCities";
function TodayWidget() {
    const { weatherData } = useWeather();
    const dispatch = useDispatch();
    const { cities } = useSelector(state => state.savedCities);
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const capitalizeFirstLetter = (str) => {
        return str
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };
    if (!weatherData || !weatherData.data) {
        return <Loader />;
    }
    if (weatherData.loading || Object.keys(weatherData.data).length === 0) {
        return <Loader />;
    }
    const data = weatherData.data;
    const { main, name: location, weather, sys } = data;
    const { temp } = main;
    const { icon, description } = weather[0];

    const handleClick = () => {
        if (!cities.includes(location)) {
            dispatch(saveCity(location))
        } else {
            dispatch(removeCity(location));
        }
    };

    return (
        <div className="TodayWidget widget">
            <div className="head">
                <h2>Now</h2>
                <p className="save-city" onClick={() => handleClick()}>
                    {
                        cities.indexOf(location) === -1 ? <span>Save City</span> : <span>Saved</span>
                    }
                </p>
            </div>
            <div className="temprature-detail">
                <p>
                    <span className="temprature-num">
                        {convertKelvinToCelcius(temp)}
                    </span>
                    ºC
                </p>
                <img src={getWeatherIcon(icon)} alt={icon} />
            </div>
            <p>{capitalizeFirstLetter(description)}</p>
            <hr />
            <p className="details">
                <span>
                    <SlCalender />
                </span>
                <span className="detail-elements">
                    <span>{days[getDay().getDay()]}</span>
                    <span>{getDay().getDate()}</span>,
                    <span>{months[getDay().getMonth()]}</span>
                </span>
            </p>
            <p className="details">
                <span>
                    <FaLocationDot />
                </span>
                <span className="detail-elements">
                    <span>{location}</span>
                    <span>{sys.country}</span>
                </span>
            </p>
        </div>
    );
}

export default TodayWidget;
