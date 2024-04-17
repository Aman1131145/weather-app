import { createAsyncThunk } from "@reduxjs/toolkit";
import * as WeatherAPI from "../api/weather";
export const getWeatherByCity = createAsyncThunk(
    "weather/getWeatherByCity",
    async ({ city }, { rejectWithValue }) => {
        try {
            const data = await WeatherAPI.getWeatherByCity(city);
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);
