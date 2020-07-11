import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
const KEY = "AIzaSyDpGsXCfyplwm-Ew3YKwTpqVZxasMExI20";

class App extends React.Component {
  // state = { videos: [] };
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: term,
      },
    });
  };

  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar callWhenSubmitted={this.onTermSubmit} />
      </div>
    );
  }
}
export default App;
