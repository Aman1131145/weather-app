import { createSlice } from "@reduxjs/toolkit";
import { getWeatherByCity } from "../thunks/weather";

const initialState = {
    loading: false,
    error: "",
    data: {
        coord: {
            lon: 77.2373,
            lat: 28.6542,
        },
        weather: [
            {
                id: 701,
                main: "Mist",
                description: "mist",
                icon: "50d",
            },
        ],
        base: "stations",
        main: {
            temp: 299.22,
            feels_like: 299.22,
            temp_min: 299.22,
            temp_max: 299.22,
            pressure: 1014,
            humidity: 78,
        },
        visibility: 1300,
        wind: {
            speed: 2.57,
            deg: 30,
        },
        clouds: {
            all: 75,
        },
        dt: 1713078683,
        sys: {
            type: 1,
            id: 9165,
            country: "IN",
            sunrise: 1713054375,
            sunset: 1713100553,
        },
        timezone: 19800,
        id: 1273294,
        name: "Delhi",
        cod: 200,
    },
};
export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setError: (state, action) => {
            const { message } = action.payload;
            state.error = message;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeatherByCity.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(getWeatherByCity.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(getWeatherByCity.rejected, (state, action) => {
                const { message } = action.payload;
                state.error = message;
                state.loading = false;
            });
    },
});
export const { setError } = weatherSlice.actions;
export default weatherSlice.reducer;
