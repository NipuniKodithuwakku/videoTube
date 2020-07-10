import axios from "axios";

const KEY = "AIzaSyC7adbPIzR-RlBThArNn5t0sB8U66vqeIU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
