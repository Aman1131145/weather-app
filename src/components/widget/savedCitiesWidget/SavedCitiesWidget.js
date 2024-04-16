import React from "react";
import "./SavedCitiesWidget.scss";
import SavedCity from "../../savedCity/SavedCity";
import { useSelector } from "react-redux";

function SavedCitiesWidget() {
    const cities = useSelector((state) => state.savedCities.cities);

    return (
        <div className="SavedCitiesWidget">
            <p className="heading">Saved Cities</p>
            <div className="cities">
                {cities.length === 0 ? (
                    <p>No Cities Saved</p>
                ) : (
                    cities.map((city) => <SavedCity city={city} key={city} />)
                )}
            </div>
        </div>
    );
}

export default SavedCitiesWidget;
