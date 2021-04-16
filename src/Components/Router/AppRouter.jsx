import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Scene from "../Scene/Scene";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="*" component={Scene} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
