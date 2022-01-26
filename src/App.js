import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Packages from './components/Packages/Packages';
import Sign from './components/Signin/Sign';
import Authprovider from './contexts/Authprovider';
import Order from './components/Private/Order/Order';
import './App.css';
import MyOrder from './components/Private/MyOrder/MyOrder';
import Dashboard from './components/Dashboard/Dashboard';
import SignUp from './components/SignUp/SignUp';

function App() {
  
  return (
    <>
      <Authprovider>
        <Router>
          <Switch>
            <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/blogs">
            <Packages></Packages>
          </Route>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <Route exact path="/login">
            <Sign></Sign>
          </Route>
          <Route exact path="/register">
            <SignUp></SignUp>
          </Route>  
          <PrivateRoute exact path="/package/:packageid">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/myBooking">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>   
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        </Router>
      </Authprovider>
    </>
  );
}

export default App;
