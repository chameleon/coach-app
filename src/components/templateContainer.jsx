import React, {Component} from "react";
import Students from "./students/students";
import StudentDetails from "./studentDetails/studentDetails";

class TemplateContainer extends Component {
  state = {};
  render() {
    return (
      <div className="templateContainer">
        {/* This container gets thing liek <Students /> loaded dynamically but hardcode here */}
        <Students />
        {/* <div>spacer</div> */}
        <StudentDetails id="5b21ca3eeb7f6fbccd471817" />
      </div>
    );
  }
}

export default TemplateContainer;
