import React from "react";

export class HashRouter extends React.Component {
  constructor() {
    super();
    this.state = {
      history: {},
      location: {},
      match: {}
    };
    this.computeProps = this.computeProps.bind(this);
  }

  componentDidMount() {
    //make sure that we start out with the hash in the URL
    if (!window.location.href.includes("/#/")) {
      let tempArr = window.location.href
        .substring(window.location.href.indexOf("/") + 2)
        .split("/");
      let endURL = tempArr.slice(1).join("/");
      window.location.href = "/#/" + endURL;
    }
    //add listener for the hashchange
    window.addEventListener("hashchange", this.computeProps);
    //set default values for routing state/props
    this.computeProps();
  }

  computeProps(e) {
    let place = e ? e.newURL : window.location.href;
    let pathname = place.substring(place.indexOf("/#") + 2);
    let search;
    if (place.includes("?")) {
      search = place.substring(place.indexOf("?") + 1);
    } else {
      search = "";
    }
    this.setState({
      location: {
        ...this.state.location,
        pathname,
        search
      },
      history: {
        ...this.state.history,
        length: window.history.length
      }
    });
  }

  render() {
    return (
      <HashRouterProvider {...this.state}>
        {this.props.children}
      </HashRouterProvider>
    );
  }
}

class HashRouterProvider extends React.Component {
  render() {
    return (
      <HashRouterContext.Provider
        value={{
          location: this.props.location,
          history: this.props.history,
          match: this.props.match
        }}
      >
        {this.props.children}
      </HashRouterContext.Provider>
    );
  }
}

export const HashRouterContext = React.createContext();
