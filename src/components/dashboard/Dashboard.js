import React from "react";
import Navbar from "../navbar/Navbar";
import "./Dashboard.scss";
import WeatherDetailCard from "../weatherDetailCard/WeatherDetailCard";
import { useWeather } from "../../provider/weatherContext";
import Notification from "../notification/Notification";

function Dashboard() {
    const { weatherData, error, hideError, info, setInfo } = useWeather();

    const renderErrorIfAny = () => {
        if ((weatherData && weatherData.error) || error) {
            let withError = error;
            if (weatherData && weatherData.error) {
                withError = weatherData.error;
            }
            return (
                <Notification
                    message={withError}
                    hideNotification={hideError}
                    type="error"
                />
            );
        }
    };

    const renderNotificationIfAny = () => {
        if (info) {
            return (
                <Notification
                    message={info}
                    hideNotification={() => setInfo(undefined)}
                    type="info"
                />
            );
        }
    };
    return (
        <div className="Dashboard">
            <Navbar />
            <WeatherDetailCard />
            {renderErrorIfAny()}
            {renderNotificationIfAny()}
        </div>
    );
}

export default Dashboard;
