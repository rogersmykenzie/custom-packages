import React from "react";

import { HashRouterContext } from "./HashRouter";
import { strictCheckUrl, looseCheckUrl, getCurrUrl } from "./util";

class RouteConsumer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      match: {
        params: {},
        isExact: strictCheckUrl(props.path, getCurrUrl()),
        path: "",
        url: ""
      }
    };
  }

  getParams(path) {
    console.log(path.split("/"));
  }
  render() {
    if (
      (this.props.exact && strictCheckUrl(this.props.path, getCurrUrl())) ||
      (!this.props.exact && looseCheckUrl(this.props.path, getCurrUrl()))
    ) {
      console.log("here");
      if (this.props.render) {
        return this.props.render(this.props);
      } else if (this.props.component) {
        console.log("true");
        return (
          <this.props.component
            {...this.props.context}
            match={this.state.match}
          />
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

export class Route extends React.Component {
  render() {
    return (
      <HashRouterContext.Consumer>
        {context => {
          return <RouteConsumer {...this.props} context={context} />;
        }}
      </HashRouterContext.Consumer>
    );
  }
}
