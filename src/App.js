import "./App.css";
import Recruitment from "./components/recruitment-component/views/Recruitment";
import Requisition from "./components/recruitment-component/views/Requisition";
import ConfigureData from "./components/recruitment-component/views/ConfigureData";
import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Recruitment />
        </Route>
        <RouteWrapper
          path="/configure"
          component={ConfigureData}
          layout={Recruitment}
        />
        <RouteWrapper
          path="/requisition"
          component={Requisition}
          layout={Recruitment}
        />
      </Switch>
    </Router>
  );

  return <Requisition />;
};
function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default App;
