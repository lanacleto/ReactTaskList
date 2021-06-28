import React, { Component } from 'react';

// Icons
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;
    const newTasks = [...tasks];

    this.setState({
      tasks: [...newTasks, newTask],
    });
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  handleEdit = (e, index) => {
    console.log('Edit', index);
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTask = [...tasks];
    newTask.splice(index, 1);

    this.setState({
      tasks: [...newTask],
    });
  }

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form onSubmit={this.handleSubmit} action="3" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />
                <FaTrash
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
