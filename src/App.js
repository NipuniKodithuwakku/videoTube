import React from "react";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  state = { videos: [] };
  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar />
      </div>
    );
  }
}
export default App;
