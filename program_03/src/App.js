import React from "react";
import "./App.css";

// Resume data
const data = {
  name: "B R Lohith Raj",
  address: "Sanjayngar",
  phone: "+91 98765 4321",
  email: "contact@rajlohith.me",
  education: [
    { id: 1, name: "R V College of Engineering", place: "Bengaluru", degree: "MCA", grade: "85.00%" },
    { id: 2, name: "Sindhi College", place: "Bengaluru", degree: "BCA", grade: "78.77%" },
    { id: 3, name: "Kendriya Vidyalaya Hebbal", place: "Bengaluru", degree: "12th", grade: "64.00%" },
    { id: 4, name: "Kendriya Vidyalaya Hebbal", place: "Bengaluru", degree: "10th", grade: "73.00%" }
  ]
};

// Functional component
function ResumeHeader(props) {
  return <h1>{props.name}</h1>;
}

// Functional component
function Education(props) {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Place</th>
        <th>Education</th>
        <th>Grade</th>
      </tr>

      {props.education.map((e) => (
        <tr>
          <td>{e.id}</td>
          <td>{e.name}</td>
          <td>{e.place}</td>
          <td>{e.degree}</td>
          <td>{e.grade}</td>
        </tr>
      ))}
    </table>
  );
}

// Class component
class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <ResumeHeader name="Resume Details" />

        <div className="info">
          <p><b>Name:</b> {data.name}</p>
          <p><b>Address:</b> {data.address}</p>
          <p><b>Phone No:</b> {data.phone}</p>
          <p><b>Email id:</b> {data.email}</p>
        </div>

        <Education education={data.education} />
      </div>
    );
  }
}

export default Resume;
