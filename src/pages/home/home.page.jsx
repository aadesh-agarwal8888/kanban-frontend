import React from 'react';
import { Navbar, Container } from "react-bootstrap";
import Board from '../../compnents/board/board.component';
import './home.styles.scss';
import { EMPLOYEES, LANES, MANAGERS, TASKS, USERS } from '../../data';
import { Link } from 'react-router-dom';
import { Button } from 'bootstrap';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user,
            tasks: TASKS,
            employees: USERS   
        }
    }

    render() {
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand >Kanban Board</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a onClick={this.props.logoutFunc}>Logout</a>
                        </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Board 
                    user = {this.state.user}
                    employees = {this.state.employees}
                    tasks = {this.state.tasks}
                    lanes = {LANES}
                />
            </div>
        )
    }

}

export default HomeScreen