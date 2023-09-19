import React, { Component } from "react";
import CountDown from "../CountDown/CountDown";
import Controller from "../Controller/Controller";
import Laps from "../Laps/Laps";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      },
      laps: [],
    };
  }
  getStart = () => {
    this.intervalID = setInterval(() => {
      let minutes = this.state.time.minutes;
      let seconds = this.state.time.seconds;
      let milliseconds = this.state.time.milliseconds;
      if (milliseconds >= 100) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds >= 60) {
        minutes++;
        seconds = 0;
      }
      this.setState({
        ...this.state,
        time: {
          minutes,
          seconds,
          milliseconds: milliseconds + 1,
        },
      });
    }, 10);
  };
  getPause = () => {
    clearInterval(this.intervalID);
  };
  getLap = () => {
    let time = {
      ...this.state.time,
    };
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps],
    });
  };
  getReset = () => {
    this.setState({
      time: {
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      },
      laps: [],
    });
  };
  render() {
    return (
      <div className="min-vh-100" style={{backgroundImage:'url(https://images.unsplash.com/photo-1518281361980-b26bfd556770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <CountDown time={this.state.time} />
              <Controller
                start={this.getStart.bind(this)}
                pause={() => {
                  this.getPause();
                }}
                reset={() => {
                  this.getReset();
                }}
                lap={() => {
                  this.getLap();
                }}
              />
              <Laps className="my-4" laps={this.state.laps} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default StopWatch;
