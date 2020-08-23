import React from "react";
import WeatherBlock1 from "./WeatherBlock1";
import WeatherBlock2 from "./WeatherBlock2";
import WeatherBlock3 from "./WeatherBlock3";

const WeatherBlockInfoOutput = (props) => {
  const { blockChange, dataBlock, temp, humidity, minTemp, maxTemp } = props;
  if (dataBlock === 1) {
    return (
      <WeatherBlock1
        blockChange={blockChange}
        dataBlock={dataBlock}
        temp={temp}
      />
    );
  } else if (dataBlock === 2) {
    return (
      <WeatherBlock2
        blockChange={blockChange}
        dataBlock={dataBlock}
        humidity={humidity}
      />
    );
  } else if (dataBlock === 3) {
    return (
      <WeatherBlock3
        blockChange={blockChange}
        dataBlock={dataBlock}
        minTemp={minTemp}
        maxTemp={maxTemp}
      />
    );
  }
};

export default WeatherBlockInfoOutput;
