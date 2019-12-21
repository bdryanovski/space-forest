import React, { Component } from 'react'
import Card from '../../react/card'
import DemoPlayground from '../playground/demo-playground'

const EXAMPLE_CARD = `
<Card>
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
</Card>
`.trim()

export default class CardsDocumentation extends Component {
  render() {
    return (
      <div>
        <h1>Cards</h1>
        <p>Cards are simple way to group content</p>

        <DemoPlayground code={ EXAMPLE_CARD } scope={{ Card }} language="html"/>


      </div>
    )
  }
}
