import React from 'react';
import './card.styles.scss';
import { Card } from "react-bootstrap";
import TaskForm from '../task-modal/task-creator-modal.component'

class TaskCard extends React.Component{
  //Props: task
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      title: '',
      desc: '',
    }
    this.updateText = this.updateText.bind(this);
    this.toggleEditable = this.toggleEditable.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.moveTaskAhead = this.moveTaskAhead.bind(this);
    this.moveTaskBack = this.moveTaskBack.bind(this);
  }

  updateText(name, e) {
    this.setState({[name]: e.currentTarget.value});
  }

  toggleEditable() {
    this.setState({
      editable: !this.state.editable,
      title: this.props.task.title,
      desc: this.props.task.desc
    });
  }

  updateTask() {
    this.props.updateTask(this.props.task.id, this.state.title, this.state.desc, this.state.laneId)
    this.toggleEditable()
  }

  deleteTask() {
    this.props.deleteTask(this.props.task.id)
  }

  moveTaskAhead() {
    this.props.changeTaskStatus(this.props.task.id, 1)
    this.toggleEditable()
  }

  moveTaskBack() {
    this.props.changeTaskStatus(this.props.task.id, 0)
    this.toggleEditable()
  }

  render() {
    return (
        <div>
        <Card className="card-task">
        <Card.Body>
          <Card.Title>
            {this.props.task.title}{" "}
            <div className="card-task-option pull-right">
              <a onClick={this.toggleEditable}>
                <i className="fas fa-edit">Edit</i>
              </a>
              &nbsp;
              <a onClick={this.deleteTask}>
                <i className="fas fa-trash">Delete</i>
              </a>
            </div>
          </Card.Title>

          <table>
            <tbody>
              <tr>
                <td>{this.props.task.desc}</td>
              </tr>
              <tr>
                <td className="font-weight-bold">Employee:</td>
                <td className="pull-right">
                  {this.props.task.emp.name}
                </td>
              </tr>
            </tbody>
          </table>
        </Card.Body>
      </Card>
      <TaskForm 
        show = {this.state.editable}
        toggleTaskCreator = {this.toggleEditable}
        updateText = {this.updateText}
        addTask = {this.updateTask}
        taskState = "Update"
        employees = {this.props.employees}
        initialTitle = {this.state.title}
        initialDesc = {this.state.desc}
      />
      </div>
      );
  }
}

export default TaskCard;