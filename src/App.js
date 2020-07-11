import React from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import youtube from "./apis/youtube";

const KEY = "AIzaSyDpGsXCfyplwm-Ew3YKwTpqVZxasMExI20";

class App extends React.Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar callWhenSubmitted={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
export default App;
