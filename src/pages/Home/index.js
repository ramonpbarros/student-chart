import React, { Component } from "react";
import students from "../../students.json";
import Table from "../../components/Table";

class Home extends Component {
  state = {
    students
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id
  //   // being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  render() {
    return (
      <React.Fragment>
        <h1 style={{textAlign: "center"}} className="m-5">Student Chart</h1>
        {this.state.students.map((student) => (
          <Table
            key={student._id}
            name={student.name}
            math={student.grades[0]}
            history={student.grades[1]}
            science={student.grades[2]}
            english={student.grades[3]}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Home;
