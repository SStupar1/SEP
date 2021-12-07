import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginComponent from "./auth/LoginComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ERoute from "./ERoute";
import HomeRouter from "./routers/HomeRouter";
import AuthRouter from "./routers/AuthRouter";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Switch>
            <Route path={ERoute.HOME} component={HomeRouter} />
            <Route path={ERoute.ROOT} component={AuthRouter} />
          </Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
