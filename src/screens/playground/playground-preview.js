import React from "react";
import PlaygroundContext from "./playground-context";

export default function PlaygroundPreview({ Component = "div", ...rest }) {
  return (
    <Component {...rest}>
      <PlaygroundContext.Consumer>
        {({ element: Element }) => {
          return Element && <Element />;
        }}
      </PlaygroundContext.Consumer>
    </Component>
  );
}
