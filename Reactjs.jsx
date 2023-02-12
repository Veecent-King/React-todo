
import React, { Component } from "react";

class TodoApp extends Component {
  state = {
    tasks: [],
    newTask: ""
  };

  handleInputChange = e => {
    this.setState({ newTask: e.target.value });
  };

  handleAddTask = () => {
    this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      newTask: ""
    });
  };

  handleDeleteTask = index => {
    const newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks });
  };

  handleUpdateTask = (index, task) => {
    const newTasks = [...this.state.tasks];
    newTasks[index] = task;
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTask}>Add Task</button>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.handleDeleteTask(index)}>
                Delete
              </button>
              <input
                type="text"
                value={task}
                onChange={e => this.handleUpdateTask(index, e.target.value)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;