import React from 'react';
import './card.styles.scss';
import { Card } from "react-bootstrap";
import TaskForm from '../task-modal/task-creator-modal.component'

/**
 * This class represents the Card which is used to show the Tasks on the Kanban Board
 */
class TaskCard extends React.Component{
  
  /**
   * Constructor
   * @param props 
   */
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      title: '',
      desc: '',
      status: 0,
      priority: 0,
    }
    this.updateText = this.updateText.bind(this);
    this.toggleEditable = this.toggleEditable.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
    this.handleStatusUpdate = this.handleStatusUpdate.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
  }

  /**
   * This function updates the text of textfields
   * @param {string} name 
   * @param {event} e 
   */
  updateText(name, e) {
    this.setState({[name]: e.currentTarget.value});
  }

  /**
   * This function is used to enable the editing mode of the task
   */
  toggleEditable() {
    this.setState({
      editable: !this.state.editable,
      title: this.props.task.title,
      desc: this.props.task.desc,
      status: this.props.task.status,
      priority: this.props.task.priority
    });
  }

  /**
   * This function is used to update the Task details
   */
  updateTask() {
    console.log(this.state);
    this.props.updateTask(this.props.task.id, this.state.title, this.state.desc, this.state.status, this.state.priority)
    this.toggleEditable()
  }

  /**
   * This function is used to delete a specific task
   */
  deleteTask() {
    this.props.deleteTask(this.props.task.id)
  }

  /**
   * This function is used to change the status of the task
   */
  changeTaskStatus() {
    this.toggleEditable()
    this.props.changeTaskStatus(this.props.task.id, this.state.status)
  }

  /**
   * This function is used to handle the select option used for selecting the task status
   * @param {updatedTask} nextStatus 
   */
  handleStatusUpdate = (nextStatus) => {
    this.setState({status: nextStatus.value})
  }

  /**
   * This function is used to handle the select option used for selecting the priority for the task.
   * @param {updated priority} priority 
   */
  handlePriorityChange = (priority) => {
    this.setState({priority: priority.value})
  }

  render() {
    return (
        <div>
        <Card className = {this.props.task.priority == 1 ? 'card-task-1' : this.props.task.priority == 2 ? 'card-task-2' : 'card-task-3'}>
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
        initialStatus = {this.props.task.status}
        initialPriority = {this.props.task.priority}
        lanes = {this.props.lanes}
        handleEmployeeChange = {this.handleStatusUpdate}
        handlePriorityChange = {this.handlePriorityChange}
      />
      </div>
      );
  }
}

export default TaskCard;