import React from "react";
import SearchBar from "./SearchBar";
import WeatherOutput from "./WeatherOutput/WeatherOutput";
import "../Styles/styles.css";

class WeatherPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: "",
      searchCompleted: false,
    };
  }

  //changes searchComplete to false which removes weatherOutput Component from DOM.
  handleWeatherRemove = () => {
    this.setState({
      searchCompleted: false,
    });
  };

  //changes searchComplete to true which renders weatherOutput Component to the DOM.
  handleInputSubmit = (inputdata) => {
    this.setState({
      searchData: inputdata,
      searchCompleted: true,
    });
  };

  render() {
    return (
      <div className="weatherPage">
        <h1 className="title">Weather Search.</h1>
        <SearchBar
          handleInputSubmit={this.handleInputSubmit}
          submitsearchList={this.state.list}
          weatherRemove={this.handleWeatherRemove}
        />
        {this.state.searchCompleted ? (
          <WeatherOutput
            className="weatherPageWeatherOutput"
            weatherRemove={this.handleWeatherRemove}
            searchData={this.state.searchData}
          />
        ) : null}
      </div>
    );
  }
}

export default WeatherPage;
