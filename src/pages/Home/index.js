import React, { Component } from "react";
import Table from "../../components/Table";
import Form from "../../components/Form";
import studentsJson from "../../students.json";
import gpaCalc from "../../components/Gpa";
import { v4 as uuidv4 } from "uuid";

let mathScore;
let historyScore;
let scienceScore;
let englishScore;

studentsJson.map(() => {
  return (
    (mathScore = gpaCalc(studentsJson[0].grades[0].slice(7))),
    (historyScore = gpaCalc(studentsJson[0].grades[1].slice(10))),
    (scienceScore = gpaCalc(studentsJson[0].grades[2].slice(10))),
    (englishScore = gpaCalc(studentsJson[0].grades[3].slice(10)))
  );
});

let gpa = (mathScore + historyScore + scienceScore + englishScore) / 4;
// console.log(gpa);

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      math: "",
      history: "",
      science: "",
      english: "",
      students: studentsJson
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    let students = [...this.state.students];

    students.push({
      name: this.state.name,
      grades: [
        `Math - ${this.state.math}`,
        `History - ${this.state.history}`,
        `Science - ${this.state.science}`,
        `English - ${this.state.english}`
      ],
      math: this.state.math,
      history: this.state.history,
      science: this.state.science,
      english: this.state.english,
      _id: uuidv4()
    });

    this.setState({
      students,
      name: "",
      math: "",
      history: "",
      science: "",
      english: ""
    });
  };

  handleInputChange = (event) => {
    let input = event.target;
    let name = event.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }} className="m-5">
          Student Chart
        </h1>
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newName={this.state.name}
          newMath={this.state.math}
          newHistory={this.state.history}
          newScience={this.state.science}
          newEnglish={this.state.english}
        />
        <Table students={this.state.students} key={"studentKey"} />
      </React.Fragment>
    );
  }
}

export default Home;
