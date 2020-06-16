import React, { Component } from "react";
import Table from "../../components/Table";
import Form from "../../components/Form";

class Home extends Component {
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id
  //   // being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };
  constructor() {
    super();
    this.state = {
      name: "",
      math: "",
      history: "",
      science: "",
      english: "",
      items: []
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    let items = [...this.state.items];

    items.push({
      name: this.state.name,
      math: this.state.math,
      history: this.state.history,
      science: this.state.science,
      english: this.state.english
    });

    this.setState({
      items,
      name: "",
      math: "",
      history: "",
      science: "",
      english: ""
    });
  };

  handleInputChange = (event) => {
    let input = event.target;
    let name = event.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }} className="m-5">
          Student Chart
        </h1>
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newName={this.state.name}
          newMath={this.state.math}
          newHistory={this.state.history}
          newScience={this.state.science}
          newEnglish={this.state.english}
        />
        <Table items={this.state.items} />
      </React.Fragment>
    );
  }
}
export default Home;
