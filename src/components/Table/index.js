import React, { Component } from "react";
import students from "../../students.json";
import TableRow from "../TableRow";

class Table extends Component {
  state = {
    students
  };

  render() {
    const items = this.props.items;

    let mathScore;
    let historyScore;
    let scienceScore;
    let englishScore;

    function gpaCal(math, history, science, english) {
      if (math === "A" || math === "a") {
        mathScore = 4;
      } else if (math === "B" || math === "b") {
        mathScore = 3;
      } else if (math === "C" || math === "c") {
        mathScore = 2;
      } else if (math === "D" || math === "d") {
        mathScore = 1;
      } else {
        mathScore = 0;
      }

      if (history === "A" || history === "a") {
        historyScore = 4;
      } else if (history === "B" || history === "b") {
        historyScore = 3;
      } else if (history === "C" || history === "c") {
        historyScore = 2;
      } else if (history === "D" || history === "d") {
        historyScore = 1;
      } else {
        historyScore = 0;
      }

      if (science === "A" || science === "a") {
        scienceScore = 4;
      } else if (science === "B" || science === "b") {
        scienceScore = 3;
      } else if (science === "C" || science === "c") {
        scienceScore = 2;
      } else if (science === "D" || science === "d") {
        scienceScore = 1;
      } else {
        scienceScore = 0;
      }

      if (english === "A" || english === "a") {
        englishScore = 4;
      } else if (english === "B" || english === "b") {
        englishScore = 3;
      } else if (english === "C" || english === "c") {
        englishScore = 2;
      } else if (english === "D" || english === "d") {
        englishScore = 1;
      } else {
        englishScore = 0;
      }

      let gpa = (mathScore + historyScore + scienceScore + englishScore) / 4;
      return <td>{gpa}</td>;
    }

    return (
      <React.Fragment>
        <table className="table table-bordered container">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Math</th>
              <th scope="col">History</th>
              <th scope="col">Science</th>
              <th scope="col">English</th>
              <th scope="col">GPA</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <TableRow
                key={student._id}
                name={student.name}
                math={student.grades[0]}
                history={student.grades[1]}
                science={student.grades[2]}
                english={student.grades[3]}
              />
            ))}
            {items.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.math}</td>
                  <td>{item.history}</td>
                  <td>{item.science}</td>
                  <td>{item.english}</td>
                  {gpaCal(item.math, item.history, item.science, item.english)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default Table;
