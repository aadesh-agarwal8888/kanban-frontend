import React from 'react';
import './card.styles.scss';

class Card extends React.Component{
  //Props: task
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      title: '',
      desc: ''
    }
    this.updateText = this.updateText.bind(this);
    this.toggleEditable = this.toggleEditable.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.moveTaskAhead = this.moveTaskAhead.bind(this);
    this.moveTaskBack = this.moveTaskBack.bind(this);
  }

  updateText(name, e) {
    this.setState({[name]: e.currentTarget.value});
  }

  toggleEditable() {
    this.setState({
      editable: !this.state.editable,
      title: this.props.task.title,
      desc: this.props.task.desc
    });
  }

  updateTask() {
    this.props.updateTask(this.props.task.id, this.state.title, this.state.desc, this.state.laneId)
    this.toggleEditable()
  }

  deleteTask() {
    this.props.deleteTask(this.props.task.id)
  }

  moveTaskAhead() {
    this.props.changeTaskStatus(this.props.task.id, 1)
    this.toggleEditable()
  }

  moveTaskBack() {
    this.props.changeTaskStatus(this.props.task.id, 0)
    this.toggleEditable()
  }

  render() {
    if(!this.state.editable) {
      return (
        <div className='card'>
          <div className='card-icon-container'>
            <div className='icon icon--delete' onClick={this.deleteTask}></div>
            <div className='icon icon--edit' onClick={ this.toggleEditable}></div>
          </div>
          <div className='card-title'>{this.props.task.title} - {this.props.task.id}</div>
          <div className='card-content'>{this.props.task.desc}</div>
        </div>
      );
    } else {
      return(
        <div className='card'>
          <div className='card-title'><input
            type='text'
            value={this.state.title}
            onChange={this.updateText.bind(null, 'title')}
            />
          </div>
          <div className='card-content'><textarea
            value={this.state.desc}
            onChange={this.updateText.bind(null, 'desc')}
            />
          </div>
          <button onClick = {this.moveTaskAhead}>Move Ahead</button>
          <button onClick={this.moveTaskBack}>Move Back</button>
          <div className = 'card-content' />
          <button onClick={this.updateTask}>Save</button>
          <button onClick={this.toggleEditable}>Cancel</button>
        </div>
      )
    }
  }
}

export default Card;