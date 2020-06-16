import React from "react";

function TableRow(props) {
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

  if (history.slice(10) === "A") {
    historyScore = 4;
  } else if (history.slice(10) === "B") {
    historyScore = 3;
  } else if (history.slice(10) === "C") {
    historyScore = 2;
  } else if (history.slice(10) === "D") {
    historyScore = 1;
  } else {
    historyScore = 0;
  }

  if (science.slice(10) === "A") {
    scienceScore = 4;
  } else if (science.slice(10) === "B") {
    scienceScore = 3;
  } else if (science.slice(10) === "C") {
    scienceScore = 2;
  } else if (science.slice(10) === "D") {
    scienceScore = 1;
  } else {
    scienceScore = 0;
  }

  if (english.slice(9) === "A") {
    englishScore = 4;
  } else if (english.slice(10) === "B") {
    englishScore = 3;
  } else if (english.slice(10) === "C") {
    englishScore = 2;
  } else if (english.slice(10) === "D") {
    englishScore = 1;
  } else {
    englishScore = 0;
  }

  let gpa = (mathScore + historyScore + scienceScore + englishScore) / 4;
  return (
      <tr>
        <td>{props.name}</td>
        <td>{math.slice(7)}</td>
        <td>{history.slice(9)}</td>
        <td>{science.slice(9)}</td>
        <td>{english.slice(9)}</td>
        <td>{gpa}</td>
      </tr>
  );
}
export default TableRow;
