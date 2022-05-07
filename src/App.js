import './App.css';
import Header from './compnents/header/header.component';
import SignInAndSignUp from './pages/sign-in-up/sign-in-sign-up.component';
import {Routes, Route, NavLink} from 'react-router-dom';
import HomeScreen from './pages/home/home.page';
import React from 'react';
import { USERS } from './data';

/**
 * main entry class
 */
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: "",
      password: "",
      user: {}
    }
    this.loginFunc = this.loginFunc.bind(this)
    this.logoutFunc = this.logoutFunc.bind(this)
    this.registerUser = this.registerUser.bind(this)
  }

  /**
   * Login handling function
   * @param {*} email 
   * @param {*} password 
   */
  loginFunc(email, password) {
    let done = false
    USERS.map((user) => {
      if(user.username == email && user.password == password) {
        this.setState({loggedIn: true, user})
      }
    });
  }

  /**
   * handles logging out
   */
  logoutFunc() {
    this.setState({loggedIn: false})
  }

  /**
   * Handles registration of the user
   * @param {*} name 
   * @param {*} email 
   * @param {*} password 
   * @param {*} role 
   */
  registerUser(name, email, password, role) {
    let lastUser = USERS[USERS.length-1]
    USERS.push({
      id: lastUser.id + 1,
      name: name,
      username: email,
      password: password,
      role: role
    })
    alert("New User Created")
  }

  render() {
    return (
      <div>
        {
          this.state.loggedIn ? 
            <HomeScreen 
              logoutFunc = {this.logoutFunc}
              user = {this.state.user}
              /> : 
            <SignInAndSignUp 
              loginFunc = {this.loginFunc}
              registerUser = {this.registerUser}
            />
        }
      </div>
    );
  }
}

export default App;
