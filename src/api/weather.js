import { BASE_URL_WEATHER, ERROR_INVALID_CITY } from "../utils/constants";
import { fetchData } from "./common";

export const getWeatherByCity = async (city_) => {
    if (!city_ || city_ === "" || city_ === " ") {
        const error = { message: ERROR_INVALID_CITY };
        throw error;
    }
    const baseUrl = BASE_URL_WEATHER + "/weather";
    const params = `q=${city_}`;
    return await fetchData(baseUrl, params);
};
