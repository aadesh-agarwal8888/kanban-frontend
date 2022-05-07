import React from 'react';
import Lane from './lane/lane.component';
import './board.styles.scss';

/**
 * This the Board that consists of the Lanes and Task Cards
 */
class Board extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: "Kanban Board",
            lanes: this.props.lanes,
            tasks: this.props.tasks
        }
        
        this.addTask = this.addTask.bind(this)
        this.updateTask = this.updateTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.changeTaskStatus = this.changeTaskStatus.bind(this)
        
    }

    /**
     * This function is used to craete a New task on the board
     * @param {*} title 
     * @param {*} desc 
     * @param {*} status 
     * @param {*} empId 
     * @param {*} priority 
     */
    addTask(title, desc, status, empId, priority) {
      let tasks = this.state.tasks;
      let nextIdx = tasks[tasks.length - 1].id + 1
      tasks.push({
        id: nextIdx,
        title: title,
        desc: desc,
        status: status,
        emp: empId,
        priority: priority
      })
      this.setState({tasks})
      console.log(this.state)
    }

    /**
     * This function is used to update the task details
     * @param {*} id 
     * @param {*} title 
     * @param {*} desc 
     * @param {*} status 
     * @param {*} priority 
     */
    updateTask(id, title, desc, status, priority) {
      let tasks = this.state.tasks;
      var idx = this.state.tasks.findIndex(task => {
        return task.id === id
      })
      tasks[idx].title = title
      tasks[idx].desc = desc
      tasks[idx].status = status
      tasks[idx].priority = priority
      console.log(tasks)
      this.setState({tasks})
    }

    /**
     * This function is used to delete the task
     * @param {*} id 
     */
    deleteTask(id) {
      let tasks = this.state.tasks.filter(task => task.id != id)
      this.setState({tasks})
    }

    /**
     * This function is used change the status of the task
     * @param {*} taskId 
     * @param {*} type 
     */
    changeTaskStatus(taskId, type) {
      let tasks = this.state.tasks;
      var idx = this.state.tasks.findIndex(task => {
        return task.id === taskId
      })

      tasks[idx].status = type
      this.setState({tasks})
    }
    
    render() {
        return(
            <div className='board'>
              <div className='header'>
                <h1>Welcome {this.props.user.name}</h1>
              </div>
              <div className='content'>
                <div className='lane-container'>
                  {
                    this.props.user.role == "manager" ? 
                      this.state.lanes.map((lane) => {
                        return <Lane 
                            id = {lane.id}
                            title = {lane.title}
                            tasks = {this.state.tasks.filter(task => task.status === lane.id)}
                            lanes = {this.state.lanes}
                            user = {this.props.user}
                            employees = {this.props.employees}
                            addTask = {this.addTask}
                            updateTask = {this.updateTask}
                            deleteTask = {this.deleteTask}
                            changeTaskStatus = {this.changeTaskStatus}
                          />
                      }) :
                      this.state.lanes.map((lane) => {
                        return <Lane 
                            id = {lane.id}
                            title = {lane.title}
                            lanes = {this.state.lanes}
                            tasks = {this.state.tasks.filter(task => task.status === lane.id && task.emp.id === this.props.user.id)}
                            user = {this.props.user}
                            employees = {this.props.employees}
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