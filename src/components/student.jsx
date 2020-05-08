import React, {Component} from "react";

class Student extends Component {
  state = {
    dudesName: this.props.studentName,
    instrument: "Guitar",
    hatSize: "7.5",
  };

  render() {
    // Template tring used here;
    return `Hey there, ${this.state.dudesName} the ${this.state.instrument} player!`;
  }
}

export default Student;
