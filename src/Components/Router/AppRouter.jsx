import React from "react";
import { HashRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import SceneSpace from "../Scene/SceneSpace";
import Comparison from "../Scene/Comparison";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/comparison" component={Comparison} />
        <PublicRoute exact path="*" component={SceneSpace} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
