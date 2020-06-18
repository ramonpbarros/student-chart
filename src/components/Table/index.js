import React, { useState, useEffect } from "react";
import TableRow from "../TableRow";
import gpaCalc from "../Gpa";

function Table(props) {
  const [highScore, setHighScore] = useState(0);
  const [lowScore, setLowScore] = useState(4);

  useEffect(() => {
    if (props.students) {
      let hScore = 0;
      let lScore = 4;
      props.students.forEach((student) => {
        let studentGpa = gpaCalc(student.grades);
        console.log(studentGpa);
        if (studentGpa > hScore) {
          hScore = studentGpa;
        }
        if (studentGpa < lScore) {
          lScore = studentGpa;
        }
      });
      setHighScore(hScore);
      setLowScore(lScore);
    }
    console.log("hgScore " + highScore);
    console.log("lowScore: " + lowScore);
  }, [props.students]);

  return (
    <React.Fragment>
      <table className="table table-bordered container responsive">
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
          {props.students.map((student) => {
            return (
              <TableRow
                key={student._id}
                name={student.name}
                math={student.grades[0]}
                history={student.grades[1]}
                science={student.grades[2]}
                english={student.grades[3]}
                highGpa={highScore}
                lowGpa={lowScore}
                studentGpa={gpaCalc(student.grades)}
              />
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
export default Table;
