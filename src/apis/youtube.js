import axios from "axios";

// const KEY = "AIzaSyDpGsXCfyplwm-Ew3YKwTpqVZxasMExI20";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  // params: {
  //   part: "snippet",
  //   maxResults: 5,
  //   key: KEY,
  // },
});
