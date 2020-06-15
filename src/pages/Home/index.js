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
        <h1>Student Chart</h1>
        {this.state.students.map((student) => (
          <Table key={student.id} name={student.name} />
        ))}
      </React.Fragment>
    );
  }
}
export default Home;
