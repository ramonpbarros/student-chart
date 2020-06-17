import React, { Component } from "react";
import TableRow from "../TableRow";

class Table extends Component {
  render() {
    const students = this.props.students;

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
            {students.map((student) => (
              <TableRow
                key={student._id}
                name={student.name}
                math={student.grades[0]}
                history={student.grades[1]}
                science={student.grades[2]}
                english={student.grades[3]}
              />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default Table;
