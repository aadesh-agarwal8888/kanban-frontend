import React from 'react';
import './card.styles.scss'

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

  render() {
    if(!this.state.editable) {
      return (
        <div className='card'>
          <div className='card-icon-container'>
            <div className='icon icon--delete' onClick={this.deleteTask}></div>
            <div className='icon icon--edit' onClick={ this.toggleEditable}></div>
          </div>
          <div className='card-title'>{this.props.task.title}</div>
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
            /></div>
          <div className='card-content'><textarea
            value={this.state.desc}
            onChange={this.updateText.bind(null, 'desc')}
            /></div>
          <button onClick={this.updateTask}>Save</button>
          <button onClick={this.toggleEditable}>Cancel</button>
        </div>
      )
    }
  }
}

export default Card;