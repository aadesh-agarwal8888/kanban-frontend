import React from 'react';
import './task-creator.styles.scss'

class TaskCreator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: true,
            cardTitle: '',
            cardDescription: ''
        }
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
              <button>Cancel</button>
            </div>
          );
        } else {
          return <div className='card card--placeholder card--placeholder-inactive' onClick={this.toggleForm}>+</div>
        }
      }

}

export default TaskCreator;