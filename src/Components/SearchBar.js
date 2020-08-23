import React from "react";

class SearchBar extends React.Component {
  initialData = {
    data: "",
  };
  constructor(props) {
    super(props);
    this.state = this.initialData;
  }

  onInputChange = (e) => {
    const { value } = e.target;
    this.props.weatherRemove();
    this.setState({
      data: value,
    });
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    this.props.handleInputSubmit(this.state.data);
    this.setState(this.initialData);
  };

  render() {
    return (
      <div className="searchBarContainer">
        <form className="searchBar" onSubmit={this.onSearchSubmit}>
          <input
            onChange={this.onInputChange}
            type="text"
            name="search"
            value={this.state.data}
            placeholder="Search Weather..."
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
