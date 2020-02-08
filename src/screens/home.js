import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="banner">
          <h2>UI Framwork</h2>
          <p>Static Styles & React Wrappers</p>
          <Link to="/documentation" className="btn primary">Getting Started</Link>
        </div>
      </>
    )
  }
}
