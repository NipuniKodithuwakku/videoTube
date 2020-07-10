import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    return this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search</label>
            <input onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
