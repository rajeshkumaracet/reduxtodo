import React from "react";
import { connect } from "react-redux";
import { deleteAll } from "../actions/index";
import { searchToDo, setFilter } from "../actions/index";
import SingleToDoComponent from "./SingleToDoComponent";

function filterToDos(todos, type) {
  switch (type) {
    case "ALL":
      return todos;
    case "COMPLETED":
      return todos.filter(todo => todo.completed === true);
    case "ACTIVE":
      return todos.filter(todo => todo.completed === false);
    default:
      return todos;
  }
}

class ListComponent extends React.Component {
  state = {
    search: ""
  };

  handleChange = async e => {
    await this.setState({
      search: e.target.value
    });
    this.props.searchToDo(this.state.search);
  };

  render() {
    return (
      <div className="m-3">
        {/* <span>Search:</span>
            <input
              type="text"
              className="searchText"
              onChange={e => this.handleChange(e)}
              value={this.state.search}
            /> */}
        {this.props.toDoList.length > 0 && (
          <div className="d-flex justify-content-end ">
            <button
              className="mb-2  btn btn-danger"
              onClick={() => this.props.deleteAll()}
            >
              <i className="fas fa-recycle" />
              &nbsp;Delete All
            </button>
          </div>
        )}
        {/* <Row className="filterRow">
          <Col md={4}>
            <Button
              variant="link"
              onClick={() => this.props.setFilter("ACTIVE")}
            >
              Show active
            </Button>
          </Col>

          <Col md={4}>
            <Button
              variant="link"
              onClick={() => this.props.setFilter("COMPLETED")}
            >
              Show Completed
            </Button>
          </Col>

          <Col md={4}>
            <Button variant="link" onClick={() => this.props.setFilter("ALL")}>
              Show All
            </Button>
          </Col>
        </Row> */}

        <ul>
          {this.props.toDoList.map((toDo, index) => {
            return (
              <SingleToDoComponent
                key={toDo.id}
                toDo={toDo}
                index={index + 1}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDoList: filterToDos(state.todo.todos, state.todo.filter)
  };
};

export default connect(
  mapStateToProps,
  { deleteAll, searchToDo, setFilter }
)(ListComponent);
