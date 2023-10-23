import axios from "axios";
import { BASE_URL } from "../constants/Links";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = process.env.REACT_APP_API_KEY;
  config.params["language"] = "en-US";
  return config;
});

export default instance;
