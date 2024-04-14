import { createAsyncThunk } from "@reduxjs/toolkit";
import * as WeatherAPI from "../api/weather";
export const getWeatherByCity = createAsyncThunk(
    "weather/getWeatherByCity",
    async ({ city }, { rejectWithValue }) => {
        try {
            return await WeatherAPI.getWeatherByCity(city);
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);
