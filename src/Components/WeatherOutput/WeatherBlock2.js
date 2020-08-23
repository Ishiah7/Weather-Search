import React from "react";

const WeatherBlock2 = (props) => {
  const { humidity, blockChange } = props;
  return (
    <div className="dataBlock">
      <p className="blockTitle">Humidity: </p>
      <span className="blockInfo">{humidity}</span>
      <button className="changeButton" onClick={blockChange}>
        <i class="fas fa-angle-double-down"></i>
      </button>
    </div>
  );
};

export default WeatherBlock2;
