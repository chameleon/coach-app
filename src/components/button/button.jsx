import React, {Component} from "react";
import "./button.css"; // had:   import style from "./button.css";
//extra level of abstraction that doesn't save any typing in reuse.
class Button extends Component {
  state = {}; //stateless
  render() {
    return (
      <button onClick={this.props.action} className={this.props.cssClassList}>
        {this.props.label}
      </button>
    );
  }
}

export default Button;
