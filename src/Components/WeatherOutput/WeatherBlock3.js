import React from "react";

const WeatherBlock3 = (props) => {
  const { minTemp, maxTemp, blockChange } = props;
  return (
    <div className="dataBlock">
      <p className="blockTitle">Min/Max Temperature: </p>
      <span className="blockInfo">
        {minTemp} °/{maxTemp} °
      </span>
      <button className="changeButton" onClick={blockChange}>
        <i class="fas fa-angle-double-down"></i>
      </button>
    </div>
  );
};

export default WeatherBlock3;
