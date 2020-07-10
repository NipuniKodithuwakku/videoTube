import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";

class App extends React.Component {
  // state = { videos: [] };
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: {
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
