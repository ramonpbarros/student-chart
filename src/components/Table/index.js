import React, { Component } from "react";
import students from "../../students.json";
import TableRow from "../TableRow";

class Table extends Component {
  state = {
    students
  };
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
        </form>
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
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

// {this.state.students.map((student) => (
//   <Table key={student.id} name={student.name} />
// ))}
export default Table;
