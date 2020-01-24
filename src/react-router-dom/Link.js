import React from "react";

export function Link(props) {
  return <a href={"/#" + props.to}>{props.children}</a>;
}
