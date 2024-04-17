import React from "react";
import "./TodaysHighlightsWidget.scss";
import {
    FaArrowDownShortWide,
    FaTemperatureArrowDown,
    FaTemperatureArrowUp,
    FaTemperatureHalf,
} from "react-icons/fa6";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { MdOutlineSpeed, MdVisibility } from "react-icons/md";
import { useWeather } from "../../../provider/weatherContext";
import { WiHumidity } from "react-icons/wi";
import Loader from "../../loader/Loader";
import { convertKelvinToCelcius } from "../../../utils";

function TodaysHighlightWidget() {
    const { weatherData } = useWeather();
    if (!weatherData || !weatherData.data) {
        return <Loader />;
    }
    if (weatherData.loading || Object.keys(weatherData.data).length === 0) {
        return <Loader />;
    }

    const getTime = (time) => {
        const epochSeconds = time;
        const date = new Date(epochSeconds * 1000);
        var hours = date.getHours();
        var minutes = date.getMinutes();

        var ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        var formattedTime =
            hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + ampm;
        return formattedTime;
    };
    const data = weatherData.data;
    const { main, sys, wind } = data;
    const { feels_like, humidity, pressure, temp_max, temp_min } = main;
    const { sunrise, sunset } = sys;
    const { speed } = wind;

    return (
        <div className="TodaysHighlightsWidget widget">
            <div className="section">
                <p className="heading">Sunrise and Sunset</p>
                <div className="sub-sections">
                    <div className="sub-section">
                        <IoMdSunny className="icon" />
                        <div className="data">
                            <p className="data-name">Sunrise</p>
                            <span className="collected-data">
                                {getTime(sunrise)}
                            </span>
                        </div>
                    </div>
                    <div className="sub-section">
                        <IoMdMoon className="icon" />
                        <div className="data">
                            <p className="data-name">Sunset</p>
                            <span className="collected-data">
                                {getTime(sunset)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <p className="heading">Atmospharic Attributes</p>
                <div className="sub-sections">
                    <div className="sub-section">
                        <WiHumidity className="icon" />
                        <div className="data">
                            <p className="data-name">Humidity</p>
                            <span className="collected-data">
                                {humidity}%
                            </span>
                        </div>
                    </div>
                    <div className="sub-section">
                        <FaArrowDownShortWide className="icon" />
                        <div className="data">
                            <p className="data-name">Pressure</p>
                            <span className="collected-data">
                                {pressure}hPA
                            </span>
                        </div>
                    </div>
                    <div className="sub-section">
                        <MdVisibility className="icon" />
                        <div className="data">
                            <p className="data-name">Visibility</p>
                            <span className="collected-data">
                                {data.visibility/1000}Km
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <p className="heading">Atmospharic Attributes</p>
                <div className="sub-sections">
                    <div className="sub-section">
                        <FaTemperatureHalf className="icon" />
                        <div className="data">
                            <p className="data-name">Feels Like</p>
                            <span className="collected-data">
                                {convertKelvinToCelcius( feels_like)}ºC
                            </span>
                        </div>
                    </div>
                    <div className="sub-section">
                        <FaTemperatureArrowUp className="icon" />
                        <div className="data">
                            <p className="data-name">Maximum Temprature</p>
                            <span className="collected-data">
                                {convertKelvinToCelcius(temp_max)}ºC
                            </span>
                        </div>
                    </div>
                    <div className="sub-section">
                        <FaTemperatureArrowDown className="icon" />
                        <div className="data">
                            <p className="data-name">Minimum Temprature</p>
                            <span className="collected-data">
                                {convertKelvinToCelcius(temp_min)}ºC
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <p className="heading">Wind</p>
                <div className="sub-sections">
                    <div className="sub-section">
                        <MdOutlineSpeed className="icon" />
                        <div className="data">
                            <p className="data-name">Wind Speed</p>
                            <span className="collected-data">
                                {speed}m/s
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodaysHighlightWidget;
