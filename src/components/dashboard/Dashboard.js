import React from "react";
import Navbar from "../navbar/Navbar";
import './Dashboard.scss'
import WeatherDetailCard from "../weatherDetailCard/WeatherDetailCard";

function Dashboard() {
    return (
        <div className="Dashboard">
            <Navbar />
            <WeatherDetailCard />
        </div>
    );
}

export default Dashboard;
