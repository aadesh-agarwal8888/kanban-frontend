import React from 'react';
import './task-creator.styles.scss'

class TaskCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            title: '',
            desc: ''
        }
        this.updateText = this.updateText.bind(this);
        this.toggleTaskCreator = this.toggleTaskCreator.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    updateText(name, e) {
      this.setState({[name]: e.currentTarget.value});
    }

    toggleTaskCreator() {
        this.setState({active: !this.state.active});
    }

    addTask(e) {
      this.props.addTask(this.state.title, this.state.desc, this.props.laneId)
      this.toggleTaskCreator()
    }

    render(){
        if(this.state.active) {
          return(
            <div className='card card--placeholder card--placeholder-active'>
              <input
                type='text'
                placeholder='Title'
                value={this.state.title}
                onChange={this.updateText.bind(null, 'title')}
              />
              <textarea
                placeholder='Description'
                value={this.state.desc}
                onChange={this.updateText.bind(null, 'desc')}
              />
              <button onClick = {this.addTask}>Save</button>
              <button onClick = {this.toggleTaskCreator}>Cancel</button>
            </div>
          );
        } else {
          return <div className='card card--placeholder card--placeholder-inactive' onClick={this.toggleTaskCreator}>+</div>
        }
      }

}

export default TaskCreator;