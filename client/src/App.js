import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Admin from './Components/Admin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './hocs/PrivateRoute'
import UnPrivateRoute from './hocs/UnPrivateRoute'
import {Game} from "./pages/Game/game";
// import {Game} from "./pages/Game/config";

function App() {

  return (
    <Router>
      <Navbar/>
      
      <Switch>

      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/> 
      {/* <Route exact path="/game" component={Game}/> */}
      <Route exact path="/game" component={Game}/>
       

      </Switch>


    </Router>
  );
}

export default App;