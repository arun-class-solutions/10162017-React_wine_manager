import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import WineList from "./WineList";
import EditWine from "./EditWine";

import "./style.css";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={WineList} />
      <Route exact path="/edit/:id" component={EditWine} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
