import React from "react";
import Navbar from "../navbar/Navbar";
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
