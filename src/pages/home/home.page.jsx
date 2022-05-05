import React from 'react';
import { Navbar } from "react-bootstrap";
import Card from '../../compnents/board/card/card.component';

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
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Kanban Board</Navbar.Brand>
                </Navbar>
                <Card />
            </div>
        )
    }

}

export default HomeScreen