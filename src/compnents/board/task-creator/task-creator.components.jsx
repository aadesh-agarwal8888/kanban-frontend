import React from 'react';
import './task-creator.styles.scss'

class TaskCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            cardTitle: '',
            cardDescription: ''
        }
        this.toggleTaskCreator = this.toggleTaskCreator.bind(this);
    }

    toggleTaskCreator() {
        this.setState({active: !this.state.active});
    }

    render(){
        if(this.state.active) {
          return(
            <div className='card card--placeholder card--placeholder-active'>
              <input
                type='text'
                placeholder='Title'
                value={this.state.cardTitle}
              />
              <textarea
                placeholder='Description'
                value={this.state.cardDescription}
              />
              <button>Save</button>
              <button onClick = {this.toggleTaskCreator}>Cancel</button>
            </div>
          );
        } else {
          return <div className='card card--placeholder card--placeholder-inactive' onClick={this.toggleTaskCreator}>+</div>
        }
      }

}

export default TaskCreator;