import * as React from "react";
import { Route, Switch } from "react-router-dom";
import ERoute from "../ERoute";
import Home from "../features/home/Home";

interface IHomeRouterProps {}

const HomeRouter: React.FunctionComponent<IHomeRouterProps> = (props) => (
  <Switch>
    <Route path={ERoute.HOME} component={Home} />
  </Switch>
);

export default HomeRouter;
