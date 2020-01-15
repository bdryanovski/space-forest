import React from 'react';
import PlaygroundContext from './playground-context';

export default function PlaygroundError(props) {
  return (
    <PlaygroundContext.Consumer>
      {({ error }) => (error ? <pre {...props}>{error}</pre> : null)}
    </PlaygroundContext.Consumer>
  );
}
