import React from "react";
import './WeatherDetailCard.scss'
import { useWeather } from "../../provider/weatherContext";
import weather from "../../reducers/weather";

function WeatherDetailCard() {
    const {weatherData} = useWeather();
    console.log(weatherData);
    // const { main, name: location, weather } = weatherData;
    // const { temp, feels_like, humidity, pressure, temp_max, temp_min } = main;
    // const { main: mainDetail, icon, description } = weather[0];
    return (
        <div className="WeatherDetailCard">
            <div className="widget weather-detail">
                <h2>Delhi</h2>
                <img src="" className="icon" alt="icon" />
                <p>description</p>
                <h3>23º</h3>
                <p>maindetail</p>
            </div>
            <div className="weather-additional-details">
                <div className="widget widget-1">
                    <p><span>Temp</span> | <span>95º</span></p>
                    <p><span>Feels Like</span> | <span>91º</span></p>
                </div>
                <div className="widget widget-2">
                    <p><span>Humidity</span> | <span>20</span></p>
                    <p><span>Pressure</span> | <span>1013</span></p>
                </div>
                <div className="widget widget-3">
                    <p><span>Temp max</span> | <span>95º</span></p>
                    <p><span>Temp min</span> | <span>95º</span></p>
                </div>
            </div>
        </div>
    );
}

export default WeatherDetailCard;
