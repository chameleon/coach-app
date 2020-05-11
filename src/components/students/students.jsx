import React, {Component} from "react";
import Button from "../button/button";
import {getStudents} from "../../services/fakeStudentService";

//Grab a function from external file.
var formatPhoneNumber = require("../../util/util.js").formatPhoneNumber;

class App extends Component {
  state = {
    students: getStudents(), //Initialized by a call to a service (imported above)
    //Sometimes this state is initializd by props from
    //what called it or at least the ID for that
  };
  //
  //placeholder
  do = () => alert("did");
  //
  editStudent = () => alert("show");

  render() {
    return (
      <>
        <table className="table">
          <caption>
            List of Students
            <Button
              label="Click ME"
              action={this.do}
              cssClassList="btn btn--red btn-lg"
            />
          </caption>

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
            {/* Loop through the sudent object in state */}

            {this.state.students.map(student => (
              <tr key={student._id}>
                <td>
                  <Button
                    cssClassList="btn btn--text"
                    action={this.editStudent}
                    label={student.name}
                  />
                </td>
                <td>{student.subject.name}</td>
                <td>
                  <a href={"tel: " + student.phoneNumber}>
                    {/* Raw, common function call */}
                    {formatPhoneNumber(student.phoneNumber)}
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
      </>
    );
  }
}

export default App;
