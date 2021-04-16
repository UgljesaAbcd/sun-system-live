import React from "react";
import { Route } from "react-router-dom";
import MenuBar from "./MenuBar";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={props => {
          return (
            <>
              <MenuBar />
              <Component {...props} />
            </>
          );
        }}
      />
    </>
  );
};
export default PublicRoute;
