import React from 'react';
import './task-creator.styles.scss';
import Select from 'react-select';
import TaskForm from '../task-modal/task-creator-modal.component';
import {Button} from 'react-bootstrap';
import CustomButton from '../../custom-button/custom-button.component';

/**
 * The Class represents the button used to create a new task
 */
class TaskCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            title: '',
            desc: '',
            emp: 0,
            priority: 0
        }
        this.updateText = this.updateText.bind(this);
        this.toggleTaskCreator = this.toggleTaskCreator.bind(this);
        this.addTask = this.addTask.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
    }

    /**
     * Update Text of the input field
     * @param {*} name 
     * @param {*} e 
     */
    updateText(name, e) {
      this.setState({[name]: e.currentTarget.value});
      console.log(this.state)
    }

    /**
     * Handles the click of button - New Task
     */
    toggleTaskCreator() {
        this.setState({active: !this.state.active});
    }

    /**
     * Add new task
     * @param {*} e 
     */
    addTask(e) {
      console.log(this.state)
      this.props.addTask(this.state.title, this.state.desc, this.props.laneId, this.state.emp, this.state.priority)
      this.toggleTaskCreator()
    }

    /**
     * Handles the select option used to select the employee
     * @param {*} selectedEmp 
     */
    handleEmployeeChange = (selectedEmp) => {
      let emp = {
        id: selectedEmp.value,
        name: selectedEmp.label
      }
      this.setState({emp})
      console.log(this.state)
    }

    /**
     * Handles the select option used to select the priority
     * @param {*} priority 
     */
    handlePriorityChange = (priority) => {
      this.setState({priority: priority.value})
    }

    render(){

      return (
        <div>
          <div onClick={this.toggleTaskCreator}>
          <CustomButton variant="primary" onClick={this.toggleTaskCreator}>
            New Task
          </CustomButton>
          </div>
          <TaskForm 
            show = {this.state.active}
            toggleTaskCreator = {this.toggleTaskCreator}
            updateText = {this.updateText}
            addTask = {this.addTask}
            handleEmployeeChange = {this.handleEmployeeChange}
            employees = {this.props.employees}
            lanes = {this.props.lanes}
            handlePriorityChange = {this.handlePriorityChange}
          />
        </div>
      );
    }

}

export default TaskCreator;