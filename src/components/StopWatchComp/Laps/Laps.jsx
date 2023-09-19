import React from "react";
import './Laps.css'
const Laps = (props) => {
  return (
    <div>
      <ul className="list-group list-group-flush overflow-y-auto">
        {props.laps.map((lap, index) => {
          return (
            <li key={index} className="list-group-item">
              <h4 className="list-group-horizontal text-start">
                <span className="text-primary-emphasis fw-bold">Lap {props.laps.length-index}: </span>
                <span className="text-danger"> {lap.minutes<10?`0${lap.minutes}`:lap.minutes} </span>
                <span className="text-dark"> minutes </span>
                <span className="text-danger"> {lap.seconds<10?`0${lap.seconds}`:lap.seconds} </span>
                <span className="text-dark"> seconds </span>
                <span className="text-danger"> {lap.milliseconds<10?`0${lap.milliseconds}`:lap.milliseconds} </span>
                <span className="text-dark"> milliseconds </span>
              </h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Laps;
