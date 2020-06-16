import React from "react";

function Table(props) {
  const math = props.math;
  const history = props.history;
  const science = props.science;
  const english = props.english;

  let mathScore;
  let historyScore;
  let scienceScore;
  let englishScore;

  if (math.slice(7) === "A") {
    mathScore = 4;
  } else if (math.slice(7) === "B") {
    mathScore = 3;
  } else if (math.slice(7) === "C") {
    mathScore = 2;
  } else if (math.slice(7) === "D") {
    mathScore = 1;
  } else {
    mathScore = 0;
  }

  if (history.slice(9) === "A") {
    historyScore = 4;
  } else if (history.slice(9) === "B") {
    historyScore = 3;
  } else if (history.slice(9) === "C") {
    historyScore = 2;
  } else if (history.slice(9) === "D") {
    historyScore = 1;
  } else {
    historyScore = 0;
  }

  if (science.slice(9) === "A") {
    scienceScore = 4;
  } else if (science.slice(9) === "B") {
    scienceScore = 3;
  } else if (science.slice(9) === "C") {
    scienceScore = 2;
  } else if (science.slice(9) === "D") {
    scienceScore = 1;
  } else {
    scienceScore = 0;
  }

  if (english.slice(9) === "A") {
    englishScore = 4;
  } else if (english.slice(9) === "B") {
    englishScore = 3;
  } else if (english.slice(9) === "C") {
    englishScore = 2;
  } else if (english.slice(9) === "D") {
    englishScore = 1;
  } else {
    englishScore = 0;
  }
  console.log(history.slice(9))
  let gpa = (mathScore + historyScore + scienceScore + englishScore);

  return (
    <table className="table container">
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
        <tr>
          <td>{props.name}</td>
          <td>{math.slice(7)}</td>
          <td>{history.slice(9)}</td>
          <td>{science.slice(9)}</td>
          <td>{english.slice(9)}</td>
          <td>{gpa}</td>
        </tr>
      </tbody>
    </table>
  );
}

// {this.state.students.map((student) => (
//   <Table key={student.id} name={student.name} />
// ))}
export default Table;
