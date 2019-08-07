import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { addToDo } from "../actions/index";

class AddToDoComponent extends React.Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCancelButton = () => {
    this.setState({
      text: ""
    });
  };

  handleAddButton = text => {
    this.props.addToDo(text);
    this.setState({
      text: ""
    });

    // localStorage.setItem("toDoList", JSON.stringify(this.state.text));
    // console.log(JSON.stringify(this.state.text));
  };

  render() {
    return (
      <div className="m-3">
        <h1>Add new Task:</h1>
        <div className="form-group ">
          <input
            type="text"
            onChange={this.handleChange}
            className="form-control mb-3"
            value={this.state.text}
            placeholder="-E.g: Go to movie @ Friday"
          />
          <button
            className="btn btn-dark btn-block"
            onClick={() => this.handleAddButton(this.state.text)}
          >
            <i className="fas fa-plus" /> &nbsp;Task
          </button>
        </div>
        {/* <button className="btn btn-info" onClick={this.handleCancelButton}>
          Cancel
        </button> */}
      </div>
    );
  }
}

export default connect(
  null,
  { addToDo }
)(AddToDoComponent);
