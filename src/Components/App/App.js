import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "../Home/Home";
import FullStory from "../../Containers/FullStory/FullStory";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/article/:id" component={FullStory} />
    </Switch>
  );
}

export default withRouter(App);
