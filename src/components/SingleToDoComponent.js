import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { removeToDo, completeToDo } from "../actions/index";

class SingleToDoComponent extends React.Component {
  render() {
    return (
      <div className="center">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-baseline">
            <button
              className="btn btn-outline-info"
              onClick={() => this.props.completeToDo(this.props.toDo.id)}
            >
              <i className="fas fa-check" />
            </button>
            <span
              style={{
                textDecoration: this.props.toDo.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {this.props.index}. {this.props.toDo.text}
              {this.props.toDo.completed === true ? "(completed)" : ""}
            </span>
            <button
              className="btn btn-outline-danger"
              onClick={() => this.props.removeToDo(this.props.toDo.id)}
            >
              <i className="far fa-trash-alt" />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  { removeToDo, completeToDo }
)(SingleToDoComponent);
