import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginComponent from "../auth/LoginComponent";
import ERoute from "../ERoute";

interface IAuthRouterProps {}

const AuthRouter: React.FunctionComponent<IAuthRouterProps> = (props) => (
  <Switch>
    <Route path={ERoute.LOGIN} component={LoginComponent} />
    <Redirect to={ERoute.LOGIN} />
  </Switch>
);

export default AuthRouter;
