import React from 'react';
import Card from '../card/card.component';
import TaskCreator from '../task-creator/task-creator.components';
import './lane.styles.scss'

class Lane extends React.Component{
  //Props: id, title, tasks, addTask
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
        {
          this.props.tasks.map((task) => {
            return <Card 
              task = {task}
              laneId = {this.props.id}
              updateTask = {this.props.updateTask}
              deleteTask = {this.props.deleteTask}
            />
          })
        }
        <TaskCreator 
          addTask = {this.props.addTask}
          laneId = {this.props.id}
        />
      </div>
    )
  }
}

export default Lane;