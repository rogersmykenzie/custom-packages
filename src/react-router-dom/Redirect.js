import React from "react";

export class Redirect extends React.Component {
  componentDidMount() {
    window.location.href = "/#" + this.props.to;
  }
  render() {
    return <></>;
  }
}
