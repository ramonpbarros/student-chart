import React from "react";

function TableRow(props) {
  const math = props.math;
  const history = props.history;
  const science = props.science;
  const english = props.english;

  function determinedClassFallOut() {
    if (props.highGpa === props.studentGpa) {
      return "btn-success";
    }
    if (props.lowGpa === props.studentGpa) {
      return "btn-danger";
    } else {
      return "";
    }
  }

  return (
    <tr className={determinedClassFallOut()}>
      <td>{props.name}</td>
      <td>{math.slice(7)}</td>
      <td>{history.slice(10)}</td>
      <td>{science.slice(10)}</td>
      <td>{english.slice(10)}</td>
      <td>{props.studentGpa}</td>
    </tr>
  );
}
export default TableRow;
