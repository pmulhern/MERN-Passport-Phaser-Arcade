import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import Admin from './Components/Admin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './hocs/PrivateRoute'
import UnPrivateRoute from './hocs/UnPrivateRoute'
import {Game} from "./pages/Game/game";
import {Game2} from "./pages/Game/game2";

function App() {

  return (
    <Router>
      <Navbar/>
      
      <Switch>

      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/> 
      <PrivateRoute path="/home" roles={["user","admin"]}component={Home}/> 
      <Route exact path="/game" component={Game}/>
      <Route exact path="/game2" component={Game2}/>
       

      </Switch>


    </Router>
  );
}

export default App;