import axios from "axios";

const BASE_URL = process.env.NEXT_BASE_URL;
//create an Axios instance with a config to prevent us from repeating these options in every request

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
});
