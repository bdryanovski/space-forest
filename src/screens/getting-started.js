import React from 'react';
import Code from './components/code';

import PKG from '../../package.json';

import * as c from '../react-components/index';
console.log(Object.keys(c), c);

const pkg_name = PKG.name;
const components = Object.keys(c).reduce((result, name) => {
  const row = {name: name, type: 'Object'};

  if (c[name] && c[name].prototype && c[name].prototype.render) {
    row.type = 'Component';
  } else if (c[name] && c[name].prototype) {
    row.type = 'Function';
  }

  result.push(row);
  return result;
}, []);

export default class GettingStarted extends React.Component {
  render() {
    return (
      <>
        <h1>Getting started</h1>

        <h2>{PKG.name} current version {PKG.version}</h2>
        <Code language="bash">
          {`npm install --save ${pkg_name}`}
        </Code>

        <p>
          Import styles inside React project
        </p>
        <Code language="javascript">
          {'import \'spaceforestbeta/dist/style.css\''}
        </Code>
        <p>
          Import inside SCSS file.
        </p>
        <Code language="css">
          {`
          @import "node_modules/${pkg_name}/dist/style.css";
          `}
        </Code>
        <h2>Access to React components</h2>
        <Code language="javascript">{`import { /* component name */ } from '${pkg_name}'`}</Code>

        <h2>Public exported components</h2>
        <Code language="javascript">
          {
            components.filter(({type}) => type === 'Component').map((component) => {
              return (
                `
import { ${component.name} } from '${pkg_name}'

<${component.name} />
                  `
              );
            }).join('\n')
          }
        </Code>
        <h2>Dependencies</h2>
        <ul>
          {Object.keys(PKG.dependencies).sort().map((dep, index) => {
            return (
              <li key={index}>
                <a href={`https://www.npmjs.com/package/${dep}`}>{dep}</a> : <strong>{PKG.dependencies[dep]}</strong></li>
            );
          })}
        </ul>
      </>
    );
  }
}
