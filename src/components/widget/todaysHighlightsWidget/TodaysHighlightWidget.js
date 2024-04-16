import React from "react";
import "./TodaysHighlightsWidget.scss";
import { FaWind } from "react-icons/fa";
import { FaArrowDownShortWide, FaTemperatureArrowDown, FaTemperatureArrowUp } from "react-icons/fa6";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { MdOutlineSpeed, MdVisibility } from "react-icons/md";
import { LiaThermometerEmptySolid } from "react-icons/lia";
import { GiBladeDrag } from "react-icons/gi";
import { useWeather } from "../../../provider/weatherContext";
import { WiHumidity } from "react-icons/wi";
import Loader from "../../loader/Loader";

function TodaysHighlightWidget() {
    const { weatherData } = useWeather();
    
    // console.log(weatherData);
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
    const { drag, speed } = wind;

    return (
        <div className="TodaysHighlightsWidget widget">
            <div className="top-sections">
                <div className="aqi section internal-widget">
                    <div className="heading">
                        <p>Air Quality Index</p>
                        <p className="aqi-rating">Good</p>
                    </div>
                    <div className="aqi-details">
                        <FaWind />
                        <p className="data">
                            <span>PM2.5</span>
                            <span className="recieved-data">3.90</span>
                        </p>
                        <p className="data">
                            <span>PM2.5</span>
                            <span className="recieved-data">3.90</span>
                        </p>
                        <p className="data">
                            <span>PM2.5</span>
                            <span className="recieved-data">3.90</span>
                        </p>
                        <p className="data">
                            <span>PM2.5</span>
                            <span className="recieved-data">3.90</span>
                        </p>
                    </div>
                </div>
                <div className="sunrise-sunset section internal-widget">
                    <p className="heading">Sunrise and Sunset</p>
                    <div className="data">
                        <div className="sunrise element">
                            <IoMdSunny />
                            <p>
                                <span>Sunrise</span>
                                <span className="collected-data">
                                    {getTime(sunrise)}
                                </span>
                            </p>
                        </div>
                        <div className="sunset element">
                            <IoMdMoon />
                            <p>
                                <span>Sunset</span>
                                <span className="collected-data">
                                    {getTime(sunset)}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-sections">
                <div className="section internal-widget">
                    <p className="heading">Humidity</p>
                    <div className="data">
                        <WiHumidity />
                        <span>{humidity}</span>%
                    </div>
                </div>
                <div className="section internal-widget">
                    <p className="heading">Pressure</p>
                    <div className="data">
                        <FaArrowDownShortWide />
                        <span>{pressure}</span>hPA
                    </div>
                </div>
                <div className="section internal-widget">
                    <p className="heading">Visibility</p>
                    <div className="data">
                        <MdVisibility />
                        <span>{data.visibility/1000}</span>km
                    </div>
                </div>
                <div className="section internal-widget">
                    <p className="heading">Feels Like</p>
                    <div className="data">
                        <LiaThermometerEmptySolid />
                        <span>{feels_like}</span>ºC
                    </div>
                </div>
                <div className="section internal-widget">
                    <p className="heading">Maximum Temprature</p>
                    <div className="data">
                        <FaTemperatureArrowUp />
                        <span>{temp_max}</span>ºC
                    </div>
                </div>
                <div className="section internal-widget">
                    <p className="heading">Minimum Temprature</p>
                    <div className="data">
                        <FaTemperatureArrowDown />
                        <span>{temp_min}</span>ºC
                    </div>
                </div>
                <div className="section internal-widget">
                    <p className="heading">Wind Drag</p>
                    <div className="data">
                        <GiBladeDrag/>
                        <span>{drag}</span>ºC
                    </div>
                </div>
                <div className="section internal-widget">
                    <p className="heading">Wind Speed</p>
                    <div className="data">
                    <MdOutlineSpeed />
                        <span>{speed}</span>ºC
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodaysHighlightWidget;
