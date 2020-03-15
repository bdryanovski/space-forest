import React, { Component } from 'react'
import DemoPlayground from '../../../react-components/playground/demo-playground'

const AUTHOR_UI = `
<div className="grid grid-gap-md">
  <div className="col-1">
    <img className="avatar avatar-xl avatar-center avatar-border" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2XqKusBKImmgD5t8we6JaTTYS-z8n-_CZQS3xBR_-4w4bJDsT" />
  </div>
  <div className="col-11">
    <h3>Rick Sanchez</h3>
    <p>He is a genius scientist whose alcoholism and reckless</p>
    <ul className="list-horizontal">
      <li><a>Twitter</a></li>
      <li><a>Github</a></li>
    </ul>
  </div>
</div>
`
export default class UIDemo extends Component {
  render() {
    return (
      <>
        <h1>UI</h1>
        <p>Small examples of ui components build with the framework</p>

        <h2>Author UI Component</h2>
        <DemoPlayground code={AUTHOR_UI} language="html" />

      </>
    )
  }
}
