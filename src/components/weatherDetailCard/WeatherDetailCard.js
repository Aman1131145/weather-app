import React from "react";
import "./WeatherDetailCard.scss";
import { useWeather } from "../../provider/weatherContext";
import Weather from "../../reducers/weather";
import { convertKelvinToCelcius, getWeatherIcon } from "../../utils";
import Loader from "../loader/Loader";
import { WeatherProvider } from "../../provider/weatherProvider";

function WeatherDetailCard() {
    const { weatherData } = useWeather();
    if (!weatherData || !weatherData.data) {
        return <Loader />;
    }
    if (weatherData.loading || Object.keys(weatherData.data).length === 0) {
        return <Loader />;
    }
    const fullWeatherInfo = weatherData.data;
    const { main, name: location, weather } = fullWeatherInfo;
    const { temp, feels_like, humidity, pressure, temp_max, temp_min } = main;
    const { main: mainDetail, icon, description } = weather[0];
    return (
        <WeatherProvider>
            <div className="WeatherDetailCard">
                <div className="widget weather-detail">
                    <h2>{location}</h2>
                    <img
                        src={getWeatherIcon(icon)}
                        className="icon"
                        alt={icon}
                    />
                    <p>{description}</p>
                    <h3>{convertKelvinToCelcius(temp)}º</h3>
                    <p>{mainDetail}</p>
                </div>
                <div className="weather-additional-details">
                    <div className="widget widget-1">
                        <p>
                            <span>Temp</span> |
                            <span>{convertKelvinToCelcius(temp)}º</span>
                        </p>
                        <p>
                            <span>Feels Like</span> |
                            <span>{convertKelvinToCelcius(feels_like)}º</span>
                        </p>
                    </div>
                    <div className="widget widget-2">
                        <p>
                            <span>Humidity</span> | <span>{humidity}</span>
                        </p>
                        <p>
                            <span>Pressure</span> | <span>{pressure}</span>
                        </p>
                    </div>
                    <div className="widget widget-3">
                        <p>
                            <span>Temp max</span> |
                            <span>{convertKelvinToCelcius(temp_max)}º</span>
                        </p>
                        <p>
                            <span>Temp min</span> |
                            <span>{convertKelvinToCelcius(temp_min)}º</span>
                        </p>
                    </div>
                </div>
            </div>
        </WeatherProvider>
    );
}

export default WeatherDetailCard;
