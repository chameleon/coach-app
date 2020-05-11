import React, {Component} from "react";
import {getStudent} from "../../services/fakeStudentService";

class StudentDetails extends Component {
  state = {
    //Inititalize state with return from getstudent()
    student: getStudent(this.props.id),
  };
  render() {
    console.log(this.state.student);
    return (
      <div className="inline">
        <h1>{this.state.student.name}</h1>
        <input type="text" />
        <h2>{this.state.student.phoneNumber}</h2>
        <h3>{this.state.student.email}</h3>
        <h4>{this.state.student.subject.name}</h4>
        {/* <h5>{this.state.student.name}</h5> */}
      </div>
    );
  }
}

export default StudentDetails;
