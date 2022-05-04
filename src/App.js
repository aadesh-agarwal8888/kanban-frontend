import './App.css';
import Header from './compnents/header/header.component';
import SignInAndSignUp from './pages/sign-in-up/sign-in-sign-up.component';
import {Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/home/home.page';

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<SignInAndSignUp/>} />
        <Route path = "/home" element = {<HomeScreen/>} />
      </Routes>
    </div>
  );
}

export default App;
