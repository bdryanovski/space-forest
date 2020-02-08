import React, { Component } from 'react'
import {Card, CardBody, CardHeader} from '../../react-components'
import DemoPlayground from '../../react-components/playground/demo-playground'

const EXAMPLE_CARD = `
<Card>
  <CardHeader>Example card</CardHeader>
  <CardBody>
    <p>Body</p>
    <a href="#n" className="btn primary">Submit</a>
    <a href="#n" className="btn primary">Cancel</a>
  </CardBody>
</Card>
`.trim()

export default class CardsDocumentation extends Component {
  render() {
    return (
      <div>
        <h1>Cards</h1>
        <p>Cards are simple way to group content</p>

        <DemoPlayground code={ EXAMPLE_CARD } scope={{ Card, CardBody, CardHeader }} language="html"/>


      </div>
    )
  }
}
