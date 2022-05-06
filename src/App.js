import './App.css';
import Header from './compnents/header/header.component';
import SignInAndSignUp from './pages/sign-in-up/sign-in-sign-up.component';
import {Routes, Route, NavLink} from 'react-router-dom';
import HomeScreen from './pages/home/home.page';
import React from 'react';
import { USERS } from './data';

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
  }

  loginFunc(email, password) {
    USERS.map((user) => {
      if(user.username == email && user.password == password) {
        this.setState({loggedIn: true, user})
      } 
    });
  }

  logoutFunc() {
    this.setState({loggedIn: false})
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
            />
        }
      </div>
    );
  }
}

export default App;
