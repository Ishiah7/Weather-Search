import React from "react";

const WeatherBlock1 = (props) => {
  const { temp, blockChange } = props;
  return (
    <div className="dataBlock">
      <p className="blockTitle">Temperature: </p>
      <span className="blockInfo">{temp} °</span>
      <button className="changeButton" onClick={blockChange}>
        <i class="fas fa-angle-double-down"></i>
      </button>
    </div>
  );
};

export default WeatherBlock1;
