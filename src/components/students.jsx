import React, {Component} from "react";

import {getStudents} from "../services/fakeStudentService";
// import Student from './student';

class App extends Component {
  state = {
    students: getStudents(),
  };

  do = () => alert("did");

  renderStudentList() {
    // console.log("Students", this.state.students);
    return (
      <table>
        <caption>List of Students</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Session length</th>
            <th scope="col">Session Price</th>

            {/* <th scope="col">Reg Date</th> */}
          </tr>
        </thead>
        <tbody>
          {this.state.students.map(student => (
            <tr key={student._id}>
              <td>
                <button className="btn--text" onClick={this.do}>
                  {student.name}
                </button>
              </td>
              <td>{student.subject.name}</td>
              <td>
                <a href={"tel: " + student.phoneNumber}>
                  {this.formatPhoneNumber(student.phoneNumber)}
                </a>
              </td>
              <td>
                <a href={"mailto: " + student.email}>{student.email}</a>
              </td>
              <td>{student.lessonLengthHours * 60} minutes</td>
              <td>{student.perLessonPriceUSD}</td>

              {/* <td>{student.registrationDate}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  formatPhoneNumber(phoneNumberString) {
    // assummes 10 numbers only
    var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ")" + match[2] + "-" + match[3];
    }
    return null;
  }

  render() {
    return <>{this.renderStudentList()}</>;
  }
}

export default App;
