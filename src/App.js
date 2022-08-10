import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Work from "./pages/index";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Work isAuthed={false} />}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
