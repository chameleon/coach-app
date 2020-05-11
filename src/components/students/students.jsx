import React, {Component} from "react";
import Button from "../button/button";
import {getStudents} from "../../services/fakeStudentService";

var formatPhoneNumber = require("../../utils/utils.js").formatPhoneNumber;
// import {formatPhoneNumber} from "../../utils/utils";

// import Student from './student';

class App extends Component {
  state = {
    //Initialized by a call to a service (imported above)
    students: getStudents(),

    //Sometimes this state is initializd by props from what called it or at least ID
  };
  //
  //placeholder
  do = () => alert("did");
  //

  renderStudentList() {
    // console.log("Students", this.state.students);
  }

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
                  <Button cssClassList="btn btn--text" action={this.do}>
                    {student.name}
                  </Button>
                </td>
                <td>{student.subject.name}</td>
                <td>
                  <a href={"tel: " + student.phoneNumber}>
                    {/* {student.phoneNumber} */}
                    {formatPhoneNumber(student.phoneNumber)}
                    {/* {this.state.formattedPhoneNumber} */}
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
