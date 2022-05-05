import React from 'react';
import './card.styles.scss'

class Card extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
      title: 'nvcsd',
      description: 'cs'
    }
  }

  render() {
      return (
        <div className='card'>
          <div className='card-icon-container'>
            <div className='icon icon--delete'></div>
            <div className='icon icon--edit'></div>
          </div>
          <div className='card-title'>{this.props.task.title}</div>
          <div className='card-content'>{this.props.task.desc}</div>
        </div>
      );
  }
}

export default Card;