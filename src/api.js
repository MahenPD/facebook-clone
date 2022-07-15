import axios from "axios";

const instance = axios.create({
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: `http://127.0.0.1:5000`,
});

export default instance;
