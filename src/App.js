import React from "react";
import "./App.css";
// import store from "./reduxImp/store";
import TestComp from "./components/TestComp";
import { Route } from "./react-router-dom/Route";
import { Redirect } from "./react-router-dom/Redirect";
import { Switch } from "./react-router-dom/Switch";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about" component={TestComp} />
        <Route path="/test" render={() => <h1>ASDF</h1>} />
        <Route path="/test2" render={() => <Redirect to="/test4" />} />
      </Switch>
    </div>
  );
}

export default App;
