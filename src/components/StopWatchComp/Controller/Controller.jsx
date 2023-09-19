import React, { Component } from "react";
class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true,
      pause: false,
      lap: false,
      reset: false,
    };
  }
  startHandler = (event) => {
    this.setState({
      ...this.state,
      start: false,
      pause: true,
      lap: true,
    });
    this.props.start();
  };
  pauseHandler = (event) => {
    this.setState({
      ...this.state,
      start: true,
      pause: false,
      lap: false,
      reset: true,
    });
    this.props.pause();
  };
  lapHandler = (event) => {
    this.props.lap();
  };
  resetHandler = (event) => {
    this.setState({
      ...this.state,
      start: true,
      pause: false,
      lap: false,
      reset: false,
    });
    this.props.reset();
  };
  getController = () => {
    let output = null;
    if (this.state.start && !this.state.reset) {
      output = (
        <div className="text-center">
          <button
            className="btn btn-success btn-lg px-5 m-4"
            onClick={(event) => this.startHandler(event)}
          >
            Start
          </button>
        </div>
      );
    } else if (this.state.pause && this.state.lap) {
      output = (
        <div className="text-center grid">
          <button
            className="btn btn-success btn-lg px-5 m-4 g-6"
            onClick={(event) => this.pauseHandler(event)}
          >
            Pause
          </button>
          <button
            className="btn btn-success btn-lg px-5 m-4 g-6"
            onClick={(event) => this.lapHandler(event)}
          >
            Lap
          </button>
        </div>
      );
    } else if (this.state.start && this.state.reset) {
      output = (
        <div className="text-center grid">
          <button
            className="btn btn-success btn-lg px-5 m-4 g-6"
            onClick={(event) => this.startHandler(event)}
          >
            Start
          </button>
          <button
            className="btn btn-success btn-lg px-5 m-4 g-6"
            onClick={(event) => this.resetHandler(event)}
          >
            Reset
          </button>
        </div>
      );
    }
    return output;
  };
  render(){
    return this.getController();
  }
}
export default Controller