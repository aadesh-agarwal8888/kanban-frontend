import React from 'react';
import { Navbar, Container } from "react-bootstrap";
import Board from '../../compnents/board/board.component';
import Card from '../../compnents/board/card/card.component';
import Lane from '../../compnents/board/lane/lane.component';
import './home.styles.scss';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: {
                id: 1,
                name: "Chris Brown",
                role: "manager",
            },
            tasks: [],
            employees: [
                {
                    id: 1,
                    name: "Aadesh"
                },
                {
                    id: 2,
                    name: "Yash"
                },
                {
                    id: 3,
                    name: "Ashwin"
                },
                {
                    id: 4,
                    name: "Ross"
                },
                {
                    id: 4,
                    name: "Taylor"
                },
                {
                    id: 4,
                    name: "Fred"
                },
            ]
            
        }
    }

    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand >Kanban Board</Navbar.Brand>
                    </Container>
                </Navbar>
                <Board 
                    user = {this.state.user}
                    employees = {this.state.employees}
                />
            </div>
        )
    }

}

export default HomeScreen