import React from 'react';
import Card from '../card/card.component';
import TaskCreator from '../task-creator/task-creator.components';
import './lane.styles.scss'

class Lane extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        title: "Planning"
    }
  }

  render() {
    return(
      <div className='lane'>
        <h2>{this.props.title}</h2>
        <Card />
        <TaskCreator />
      </div>
    )
  }
}

export default Lane;