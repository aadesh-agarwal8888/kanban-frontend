import React from 'react';
import Lane from './lane/lane.component';
import './board.styles.scss'

class Board extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: "Kanban Board"
        }
    }

    render() {
        return(
            <div className='board'>
              <div className='header'>
                <h1>{this.state.title}</h1>
              </div>
              <div className='content'>
                <div className='lane-container'>
                  <Lane />
                  <Lane />
                  <Lane />
                </div>
              </div>
            </div>
        )
    }

}

export default Board;