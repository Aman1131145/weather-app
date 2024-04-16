import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../reducers/weather";
import savedCities from "../reducers/savedCities";

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        savedCities: savedCities
    },
});
