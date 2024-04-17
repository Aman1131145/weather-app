import { createSlice } from "@reduxjs/toolkit";
import { getWeatherByCity } from "../thunks/weather";

const initialState = {};
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
