import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/customers/Customers";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";
import Add from "../pages/users/add/Add";

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin" exact component={Dashboard} />
      <Route path="/admin/customers" exact component={Customers} />

      <Route path="/admin/products" exact component={Products} />

      <Route path="/admin/user" component={Users} />
      <Route path="/admin/user/add" component={Add} />
    </Switch>
  );
};

export default Routes;
