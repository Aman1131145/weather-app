import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { WeatherProvider } from "./provider/weatherProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <WeatherProvider>
                <App />
            </WeatherProvider>
        </Provider>
    </React.StrictMode>
);
