import React from "react";
import { IndexRoute, Route } from 'react-router';

import Application from "./components/Application";
import Home from "./components/Home";
import Users from "./components/Users";

const Routes = (
    <Route component={Application}>
      <Route path="/" component={Home} />
      <Route path="users" component={Users} />
    </Route>
);
export default Routes;
