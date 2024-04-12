import { API_KEY } from "../utils/constants";
export const fetchData = async (url, params) => {
    const fullUrl = `${url}?${params}&apiid=${API_KEY}`
    const rawResponse = awaitfetch(fullUrl);
    const response = await rawResponse.json();
    if (rawResponse.status === 200) {
        return response;
    }
    throw response;
}