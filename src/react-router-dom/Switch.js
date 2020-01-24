import React from "react";
import {} from "./util";

export class Switch extends React.Component {
  componentDidMount() {
    for (let i = 0; i < this.props.children.length; i++) {
      console.log(this.props.children[i]);
    }
  }

  render() {
    return this.props.children;
  }
}
