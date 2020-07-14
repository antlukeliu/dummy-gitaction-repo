import React from "react";
import { About, Signup, CommunityResources, Home } from "./../views/Views";
import { TopNav } from "./../components/Components";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <TopNav />
      <div className="covid-body">
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/community-resources"
            component={CommunityResources}
          />
        </Switch>
      </div>
    </div>
  );
};
