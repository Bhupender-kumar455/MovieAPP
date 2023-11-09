import axios from "axios";
export const base_URL = "https://api.tvmaze.com";
const options = {
  method: "GET",
  url: base_URL,
  param: {
    limit: 10,
  },
};

const fetchFromAPI = (url) => {
  const data = axios.get(`${base_URL}/${url}`, options);
  return data;
};
export default fetchFromAPI;
