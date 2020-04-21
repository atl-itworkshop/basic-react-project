import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";

import Home from "./components/pages/Home";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";

import "./App.css";

const App = () => {

   return (
      <AuthState>
         <Router>
            <Navbar />
            <Switch>
               <PrivateRoute exact path="/" component={Home} />
               <Route exact path="/register" component={Register} />
               <Route exact path="/login" component={Login} />
            </Switch>
         </Router>
      </AuthState>
   );
};

export default App;
