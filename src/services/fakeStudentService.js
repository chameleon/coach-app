// import * as subjectsAPI from "./fakeSubjectService";

const students = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Bob Jameson",
    phoneNumber: 7023425241,
    email: "bob@bob.com",
    subject: {_id: "5b21ca3eeb7f6fbccd471818", name: "Guitar"},
    numberInStock: 6,
    lessonLengthHours: 0.5,
    perLessonPriceUSD: 25,
    registrationDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Mike Nesmith",
    phoneNumber: 7025859384,
    email: "bob@bob.com",
    subject: {_id: "5b21ca3eeb7f6fbccd471814", name: "Web Code"},
    numberInStock: 6,
    lessonLengthHours: 0.75,
    perLessonPriceUSD: 30,
    registrationDate: "2018-01-06T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Sarah Bilbao",
    phoneNumber: 7024255524,
    email: "bob@bob.com",
    subject: {_id: "5b21ca3eeb7f6fbccd471820", name: "Fitness"},
    numberInStock: 6,
    lessonLengthHours: 1.5,
    perLessonPriceUSD: 48,
    registrationDate: "2018-03-03T19:04:28.809Z",
  },
];

export function getStudents() {
  return students;
}

export function getStudent(id) {
  return students.find(s => s._id === id);
}

export function saveStudent(student) {
  let studentInDb = student.find(s => s._id === student._id) || {};
  studentInDb.name = student.name;
  //   studentInDb.subject = subjectsAPI.subjects.find(
  //     (s) => s._id === student.subjectId
  //   );
  studentInDb.numberInStock = student.numberInStock;
  studentInDb.dailyRentalRate = student.dailyRentalRate;

  if (!studentInDb._id) {
    studentInDb._id = Date.now();
    students.push(studentInDb);
  }

  return studentInDb;
}

export function deletestudent(id) {
  let studentInDb = students.find(s => s._id === id);
  students.splice(students.indexOf(studentInDb), 1);
  return studentInDb;
}
