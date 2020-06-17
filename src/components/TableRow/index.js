import React, { useState } from "react";
import gpaCalc from "../Gpa";

function TableRow(props) {
  const math = props.math;
  const history = props.history;
  const science = props.science;
  const english = props.english;
  
  let highScore = 3.5;
  let lowScore = 1.5;

  const [hScore, setHscore] = useState(highScore)


  let mathScore = gpaCalc(math.slice(7));
  let historyScore = gpaCalc(history.slice(10));
  let scienceScore = gpaCalc(science.slice(10));
  let englishScore = gpaCalc(english.slice(10));

  let gpa = (mathScore + historyScore + scienceScore + englishScore) / 4;

  function score() {
    if (gpa > hScore) {
      highScore = gpa;
      setHscore(highScore);
      console.log(hScore, highScore)
      return "btn-success";
    } else if (gpa === hScore){
      return "btn-success";
    }else if (gpa < hScore && gpa > lowScore) {
      return "";
    }

    if (gpa <= lowScore) {
      lowScore = gpa;
      // console.log(lowScore);
      return "btn-danger";
    } else if (gpa > lowScore && gpa < hScore) {
      return "";
    }
  }

  return (
    <tr className={score()}>
      <td>{props.name}</td>
      <td>{math.slice(7)}</td>
      <td>{history.slice(10)}</td>
      <td>{science.slice(10)}</td>
      <td>{english.slice(10)}</td>
      <td>{gpa}</td>
    </tr>
  );
}
export default TableRow;
