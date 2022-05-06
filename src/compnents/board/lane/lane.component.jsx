import React from 'react';
import TaskCard from '../card/card.component';
import TaskCreator from '../task-creator/task-creator.components';
import './lane.styles.scss';
import { DropTarget } from 'react-dnd';

class Lane extends React.Component{
  //Props: id, title, tasks, addTask
  constructor(props) {
    super(props);
    this.state = {
        title: "Planning"
    }
  }

  render() {

    return (
      <div className="column-wrapper">
        <div>
            <div className="lane-column">
                <div className="card bg-light">
                  <div className="card-header stage-header">
                    <h6 className="card-title text-uppercase text-truncate py-2">
                      {this.props.title}
                    </h6>
                  </div>
                  <div className="card-body" >
                    {
                      this.props.tasks.map((task) => {
                        return <TaskCard 
                            task = {task}
                            laneId = {this.props.id}
                            updateTask = {this.props.updateTask}
                            deleteTask = {this.props.deleteTask}
                            changeTaskStatus = {this.props.changeTaskStatus}
                            employees = {this.props.employees}
                            lanes = {this.props.lanes}
                          />
                      })
                    }
                    {
                      this.props.user.role == "manager" ? 
                      <TaskCreator 
                        addTask = {this.props.addTask}
                        laneId = {this.props.id}
                        employees = {this.props.employees}
                        lanes = {this.props.lanes}
                      /> : <div />
                    }
                  </div>
                </div>
              </div>
        </div>
      </div>
    );
  }
}

export default Lane;