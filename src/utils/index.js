export const getDay = (date) => new Date(date * 1000).getDate();
export const getHour = (date) =>
    new Date(date * 1000).toLocaleDateString("en-US");
export const getMonth = (date) => {
    return new Date(date * 1000).toLocaleDateString("default", {
        month: "short",
    });
};
export const getWeatherIcon = icon => {
    return 'https:openweathermap.org/img/wn/${icon}@2x.png'
}