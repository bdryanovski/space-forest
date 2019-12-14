import React from "react";
import Context from "./context";

export default function Preview({ Component = "div", ...rest }) {
  return (
    <Component {...rest}>
      <Context.Consumer>
        {({ element: Element }) => {
          return Element && <Element />;
        }}
      </Context.Consumer>
    </Component>
  );
}
