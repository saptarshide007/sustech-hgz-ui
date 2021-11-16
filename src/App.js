import logo from "./logo.svg";
import "./App.css";
import Recruitment from "./components/recruitment-component/Recruitment";
import Requisition from "./components/recruitment-component/create-requisition/Requisition";
import CreateAppList from "./components/recruitment-component/create/CreateAppList";
import {React, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
   
  return (
  <Router>
        <Switch>
          <Route exact path="/">
            <Recruitment/>
          </Route>
          <RouteWrapper path="/create" component={CreateAppList} layout={Recruitment} />
          <RouteWrapper path="/requisition" component={Requisition} layout={Recruitment} />
        </Switch>
  </Router>
);

  return <Requisition />;
};
function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

export default App;
