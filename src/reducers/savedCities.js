import { createSlice } from "@reduxjs/toolkit";

export const savedCitiesSlice = createSlice({
    name: "saved_cities",
    initialState: {
        cities: [],
    },
    reducers: {
        setError: (state, action) => {
            const { message } = action.payload;
            state.error = message;
        },
        saveCity: (state, action) => {
            state.cities.push(action.payload);
        },
        removeCity: (state, action) => {
            const cityToRemove = action.payload;
            {
                state.cities.forEach(element => {
                    console.log(element === cityToRemove);
                });
            }
            state.cities = state.cities.filter((city) => city !== cityToRemove);
        },
    },
});

export const { setError, saveCity, removeCity } = savedCitiesSlice.actions;
export default savedCitiesSlice.reducer;
