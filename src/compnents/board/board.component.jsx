import React from 'react';
import Lane from './lane/lane.component';
import './board.styles.scss';


class Board extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: "Kanban Board",
            lanes: [
              {
                id: 1,
                title: "Planned"
              },
              {
                id: 2,
                title: "In Progress"
              },
              {
                id: 3,
                title: "Completed"
              },
            ],
            tasks: [
              {
                id: 1,
                title: 'TASK 1',
                desc: 'TASK 1 DESC',
                status: 1
              },
              {
                id: 2,
                title: 'TASK 2',
                desc: 'TASK 2 DESC',
                status: 1
              },
              {
                id: 3,
                title: 'TASK 3',
                desc: 'TASK 3 DESC',
                status: 2
              },
              {
                id: 4,
                title: 'TASK 4',
                desc: 'TASK 4 DESC',
                status: 3
              },
            ]
        }
        
        this.addTask = this.addTask.bind(this)
        this.updateTask = this.updateTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.changeTaskStatus = this.changeTaskStatus.bind(this)
        
    }

    addTask(title, desc, status) {
      let tasks = this.state.tasks;
      tasks.push({
        id: tasks.length + 1,
        title: title,
        desc: desc,
        status: status
      })
      this.setState({tasks})
    }

    updateTask(id, title, desc, status) {
      let tasks = this.state.tasks;
      var idx = this.state.tasks.findIndex(task => {
        return task.id === id
      })
      tasks[idx].title = title
      tasks[idx].desc = desc

      this.setState({tasks})
    }

    deleteTask(id) {
      let tasks = this.state.tasks.filter(task => task.id != id)
      this.setState({tasks})
    }

    changeTaskStatus(taskId, type) {
      let tasks = this.state.tasks;
      var idx = this.state.tasks.findIndex(task => {
        return task.id === taskId
      })

      if(type === 0) {
        if(tasks[idx].status != 1) {
          tasks[idx].status--;
        } else {
          console.log("Cannot be done")
        }
      } else {
        if(tasks[idx].status != 3) {
          tasks[idx].status++;
        } else {
          console.log("Cannot be done")
        }
      }
      this.setState({tasks})
    }
    
    render() {
        return(
            <div className='board'>
              <div className='header'>
                <h1>{this.state.title}</h1>
              </div>
              <div className='content'>
                <div className='lane-container'>
                  {
                    this.state.lanes.map((lane) => {
                      return <Lane 
                          id = {lane.id}
                          title = {lane.title}
                          tasks = {this.state.tasks.filter(task => task.status === lane.id)}
                          addTask = {this.addTask}
                          updateTask = {this.updateTask}
                          deleteTask = {this.deleteTask}
                          changeTaskStatus = {this.changeTaskStatus}
                        />
                    })
                  }
                </div>
              </div>
            </div>
        )
    }

}

export default Board;