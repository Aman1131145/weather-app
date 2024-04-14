import { ERROR_BROWSER_GEOLOCATION_OFF, LOCAL_STORAGE_KEY_GPS_POSITION } from "./constants";

export const getDay = (date) => new Date(date * 1000).getDate();
export const getHour = (date) =>
    new Date(date * 1000).toLocaleDateString("en-US");
export const getMonth = (date) => {
    return new Date(date * 1000).toLocaleDateString("default", {
        month: "short",
    });
};

export const convertKelvinToCelcius = (k) => {
    return Math.trunc(k - 273.15);
};

export const getWeatherIcon = icon => {
    return `https:openweathermap.org/img/wn/${icon}@2x.png`;
};


export const setLocalStorageItem = (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
}

export const getLocalStorageItem = (key, value) => {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    }
    return null;
};

export const getURLParam = (param) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}
