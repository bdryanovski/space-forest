import React, { Component } from 'react'

export default class Neumorphism extends Component {
  render() {
    return (
      <div className="background-neumorphism">
        <h1>Neumorphism</h1>
        <p>
          Code from here <a rel="noopener noreferrer" href="https://uxplanet.org/neumorphism-in-user-interface-tutorial-c353698ac5c0" target='_blank'>link</a>.
          Also this page have internal background and padding for the demo.
        </p>

        <h2>Examples</h2>
        <div className="box-neumorphism"></div>
        <div className="circle-neumorphism"></div>
        <div className="pill-neumorphism"></div>
        <div className="line-neumorphism"></div>

        <h2>Card</h2>

        <div className="neumorphism">
          <div className="card">
            <h1 className="card-title">Example card</h1>
            <div className="card-line"></div>
            <p className="card-body">
              Content
            </p>
            <div className="card-line"></div>
            <div className="footer">
              <a href="#n" className="btn primary">Submit</a>
              <a href="#n" className="btn primary">Cancel</a>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
