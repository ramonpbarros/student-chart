import React from "react";
import Table from "../../components/Table";

function Home() {
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id
  //   // being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }} className="m-5">
        Student Chart
      </h1>
      <Table />
    </React.Fragment>
  );
}
export default Home;
