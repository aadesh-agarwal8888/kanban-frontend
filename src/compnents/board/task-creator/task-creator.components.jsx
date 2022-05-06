import React from 'react';
import './task-creator.styles.scss';
import Select from 'react-select';
import TaskForm from '../task-modal/task-creator-modal.component';
import {Button} from 'react-bootstrap';
import CustomButton from '../../custom-button/custom-button.component';

class TaskCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            title: '',
            desc: '',
            emp: 0
        }
        this.updateText = this.updateText.bind(this);
        this.toggleTaskCreator = this.toggleTaskCreator.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    updateText(name, e) {
      this.setState({[name]: e.currentTarget.value});
      console.log(this.state)
    }

    toggleTaskCreator() {
        this.setState({active: !this.state.active});
    }

    addTask(e) {
      console.log(this.state)
      this.props.addTask(this.state.title, this.state.desc, this.props.laneId, this.state.emp)
      this.toggleTaskCreator()
    }

    handleEmployeeChange = (selectedEmp) => {
      let emp = {
        id: selectedEmp.value,
        name: selectedEmp.label
      }
      this.setState({emp})
      console.log(this.state)
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
          />
        </div>
      );
    }

}

export default TaskCreator;