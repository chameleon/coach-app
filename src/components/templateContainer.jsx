import React, {Component} from "react";

import Students from "./students/students";

class TemplateContainer extends Component {
  state = {};
  render() {
    return (
      <div className="templateContainer">
        {/* This container gets thing liek <Students /> loade dynamically but hardcode here */}
        <Students />
      </div>
    );
  }
}

export default TemplateContainer;
