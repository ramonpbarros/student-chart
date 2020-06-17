import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="container mb-2" onSubmit={this.props.handleFormSubmit} id="form">
        <div className="form-row">
          <div className="col">
            <input
              placeholder="Name"
              id="name"
              value={this.props.newName}
              type="text"
              name="name"
              onChange={this.props.handleInputChange}
            />
          </div>
          <div className="col">
            <input
              placeholder="Math"
              id="math"
              value={this.props.newMath}
              type="text"
              name="math"
              onChange={this.props.handleInputChange}
            />
          </div>
          <div className="col">
            <input
              placeholder="History"
              id="history"
              value={this.props.newHistory}
              type="text"
              name="history"
              onChange={this.props.handleInputChange}
            />
          </div>
          <div className="col">
            <input
              placeholder="Science"
              id="science"
              value={this.props.newScience}
              type="text"
              name="science"
              onChange={this.props.handleInputChange}
            />
          </div>
          <div className="col">
            <input
              placeholder="English"
              id="english"
              value={this.props.newEnglish}
              type="text"
              name="english"
              onChange={this.props.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" value="Submit">
            Add Student
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
