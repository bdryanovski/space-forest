import React from 'react'

export default class LinksButtonsDemo extends React.Component {
  render() {
    return (
      <>
        <h1>Links & Buttons</h1>

        <h2 id="links">Links</h2>
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
        <h2>Button HTML attribute</h2>
        <div className="grid-container">
          <div className="grid-column">
            <button className="btn">Standart</button>
          </div>
          <div className="grid-column">
            <button className="btn primary">Primary</button>
          </div>
          <div className="grid-column">
            <button className="btn success">Success</button>
          </div>
          <div className="grid-column">
            <button className="btn warning">Warning</button>
          </div>
          <div className="grid-column">
            <button className="btn danger">Danger</button>
          </div>
        </div>
        <h2>A HTML attribute</h2>
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
      </>
    )
  }
}
