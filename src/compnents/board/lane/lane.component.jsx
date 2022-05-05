import React from 'react';
import Card from '../card/card.component';
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
        <h2>{this.state.title}</h2>
        <Card />
      </div>
    )
  }
}

export default Lane;