import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form className="container mb-2" onSubmit={this.props.handleFormSubmit}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.props.name}
              onChange={this.props.handleInputChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Math"
              name="math"
              value={this.props.math}
              onChange={this.props.handleInputChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="History"
              name="history"
              value={this.props.history}
              onChange={this.props.handleInputChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="Science"
              name="science"
              value={this.props.science}
              onChange={this.props.handleInputChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              placeholder="English"
              name="english"
              value={this.props.english}
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
