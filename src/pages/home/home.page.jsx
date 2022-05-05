import React from 'react';
import { Navbar } from "react-bootstrap";
import Board from '../../compnents/board/board.component';
import Card from '../../compnents/board/card/card.component';
import Lane from '../../compnents/board/lane/lane.component';
import './home.styles.scss';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {
                id: "1",
                name: "XYZ",
                role: "manager",
            },
            tasks: []
            
        }
    }

    render() {
        return(
            <div>
                <Board />
            </div>
        )
    }

}

export default HomeScreen