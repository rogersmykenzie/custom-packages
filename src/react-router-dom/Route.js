import React from "react";

import { HashRouterContext } from "./HashRouter";

class RouteConsumer extends React.Component {
  getCurrUrl() {
    return window.location.href.substring(
      window.location.href.indexOf("/#/") + 2
    );
  }

  looseCheckUrl() {
    let myUrl = this.getCurrUrl();
    let arr1 = myUrl.split("");
    let arr2 = this.props.path.split("");
    let length = Math.min(arr1.length, arr2.length);
    for (let i = 0; i < length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  strictCheckUrl() {
    let myUrl = this.getCurrUrl();
    if (myUrl === this.props.path) {
      return true;
    }
    return false;
  }
  render() {
    if (
      (this.props.exact && this.strictCheckUrl()) ||
      (!this.props.exact && this.looseCheckUrl())
    ) {
      if (this.props.render) {
        return this.props.render(this.props);
      } else if (this.props.component) {
        console.log("true");
        return <this.props.component {...this.props.context} />;
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
