import axios from "axios";

const KEY = "AIzaSyD_fIeK-dAA6xdPUFUfRH5W2QlyR_4HMPY";

export default axios.create({
  baseURL: "",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
