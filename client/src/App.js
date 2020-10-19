import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Todos from './Components/Todos';
import Admin from './Components/Admin';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PrivateRoute from './hocs/PrivateRoute'
import UnPrivateRoute from './hocs/UnPrivateRoute'

function App() {

  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
      {/* <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/> */}
      {/* <Route path="/todos" roles={["user","admin"]} component={Todos}/> */}
      {/* <Route path="/admin" roles={["admin"]} component={Admin}/> */}
      {/* <Route path="/login" component={Login}/> */}
      {/* <Route path="/register" component={Register}/> */}
    </Router>
  );
}

export default App;
