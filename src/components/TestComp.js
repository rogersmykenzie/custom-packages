import React from "react";
import { Link } from "../react-router-dom/Link";

const TestComp = props => (
  <div>
    <h1>TEST</h1>
    <Link to="/test2">
      <button>Click me!</button>
    </Link>
  </div>
);

export default TestComp;
