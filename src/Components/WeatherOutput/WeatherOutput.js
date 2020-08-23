import React from "react";
import WeatherBlockInfoOutput from "./weatherBlockInfoOutput";

class WeatherOutput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: this.props.searchData,
      units: "metric",
      dataBlock: 1,
      apiData: {
        dataRecieved: false,
        error: false,
        weatherDescription: "",
        weatherIcon: "",
        city: "",
        country: "",
        temp: "",
        humidity: "",
        minTemp: "",
        maxTemp: "",
        type: 0,
      },
    };
  }

  removeWeather = () => {
    this.props.weatherRemove();
  };

  blockChange = () => {
    const { dataBlock } = this.state;
    if (dataBlock === 1) {
      this.setState({
        dataBlock: 2,
      });
    } else if (dataBlock === 2) {
      this.setState({
        dataBlock: 3,
      });
      return <p>hello1</p>;
    } else if (dataBlock === 3) {
      this.setState({
        dataBlock: 1,
      });
    }
  };

  async componentDidMount() {
    const key = SECRET_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=${this.state.units}&appid=${key}`;
    await fetch(url)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.redirected === false) {
          this.setState({
            apiData: {
              error: true,
            },
          });
          throw new Error(`not valid search term...\n${res.redirected}`);
        }
      })
      .then((data) => {
        this.setState({
          apiData: {
            dataRecieved: true,
            weatherDescription: data.weather[0]["description"],
            weatherIcon: data.weather[0]["icon"],
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            humidity: data.main.humidity,
            minTemp: data.main.temp_min,
            maxTemp: data.main.temp_max,
            type: data.sys.type,
          },
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          apiData: {
            error: true,
          },
        });
        console.log(err);
      });
  }

  render() {
    const {
      weatherDescription,
      weatherIcon,
      city,
      country,
      temp,
      humidity,
      minTemp,
      maxTemp,
    } = this.state.apiData;

    const img = `http://openweathermap.org/img/wn/${weatherIcon}.png`;

    if (this.state.apiData.type === 1) {
      return (
        <div className="weatherOutput">
          <div className="typeOfWeatherBlock">
            <p>{weatherDescription}</p>
            <img src={img} alt="Weather Icon" />
          </div>
          <h1>
            {city}
            <span>{country}</span>
          </h1>
          <WeatherBlockInfoOutput
            blockChange={this.blockChange}
            dataBlock={this.state.dataBlock}
            temp={temp}
            humidity={humidity}
            minTemp={minTemp}
            maxTemp={maxTemp}
          />
          <button className="exitButton" onClick={this.removeWeather}>
            x
          </button>
        </div>
      );
    } else if (this.state.apiData.error) {
      return (
        <div className="weatherOutputError">
          <p>Please Enter A Valid Town/City Name</p>
        </div>
      );
    } else {
      return (
        <div className="weatherOutputLoading">
          <div className="outputLoader">
            <i class="fas fa-smog"></i>
          </div>
        </div>
      );
    }
  }
}

export default WeatherOutput;
