import React from "react";
import "./App.css";
// import store from "./reduxImp/store";
import TestComp from "./components/TestComp";
import { Route } from "./react-router-dom/Route";

function App() {
  return (
    <div className="App">
      <Route path="/about" component={TestComp} />
      <Route path="/test" render={() => <h1>ASDF</h1>} />
    </div>
  );
}

export default App;
