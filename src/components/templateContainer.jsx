import React, {Component} from "react";

import Students from "./students";

class TemplateContainer extends Component {
  state = {};
  render() {
    return (
      <div className="templateContainer">
        <Students />
      </div>
    );
  }
}

export default TemplateContainer;
