import React from 'react';
import DemoPlayground from '../playground/demo-playground';

const BUTTON_EXAMPLE = `
<div className="grid-container">
  <div className="grid-column">
    <a href="#links">Standart link</a>
  </div>
  <div className="grid-column">
    <button className="primary">Standart Button</button>
  </div>
</div>
`.trim();

const LINKS_EXAMPLE = `
<div className="grid-container">
  <div className="grid-column">
    <a href="#links">Standart</a>
  </div>
  <div className="grid-column">
    <a href="#links" className="primary">
      Primary
    </a>
  </div>
  <div className="grid-column">
    <a href="#links" className="success">
      Success
    </a>
  </div>
  <div className="grid-column">
    <a href="#links" className="warning">
      Warning
    </a>
  </div>
  <div className="grid-column">
    <a href="#links" className="danger">
      Danger
    </a>
  </div>
</div>
`.trim();

const BTN_EXAMPLE = `
<div className="grid-container">
  <div className="grid-column">
    <a href="#links" className="btn">
      Standart
    </a>
  </div>
  <div className="grid-column">
    <a href="#links" className="btn primary">
      Primary
    </a>
  </div>
  <div className="grid-column">
    <a href="#links" className="btn success">
      Success
    </a>
  </div>
  <div className="grid-column">
    <a href="#links" className="btn warning">
      Warning
    </a>
  </div>
  <div className="grid-column">
    <a href="#links" className="btn danger">
      Danger
    </a>
  </div>
</div>
`.trim();

export default class LinksButtonsDemo extends React.Component {
  render() {
    return (
      <>
        <h1>Links & Buttons</h1>
        <p>
          Write some documentation here
        </p>
        <DemoPlayground code={BUTTON_EXAMPLE} language="html"></DemoPlayground>

        <h2 id="links">Links</h2>
        <DemoPlayground code={LINKS_EXAMPLE} language="html"></DemoPlayground>

        <h2>Button HTML attribute</h2>
        <DemoPlayground code={BTN_EXAMPLE} language="html"></DemoPlayground>
      </>
    );
  }
}
