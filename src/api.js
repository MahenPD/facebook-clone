import axios from "axios";

const deployedURL = "https://hate-speech-detection-fyp.herokuapp.com";
const localBaseURL = "http://127.0.0.1:5000";

const instance = axios.create({
  timeout: 60000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: deployedURL,
});

export default instance;
