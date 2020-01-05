import React, {Component} from 'react'
import {Article} from 'src/react'
import DemoPlaygourd from '../../playground/demo-playground'

const ARTICLE = `
<Article>
  <h1>Title</h1>
</Article>
`
const SCOPE = {Article}
export default class LayoutArticleDemo extends Component {
  render() {
    return (
      <>
        <DemoPlaygourd code={ARTICLE} scope={SCOPE} />
      </>
    )
  }
}
