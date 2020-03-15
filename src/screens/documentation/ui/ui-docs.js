import React, {Component} from 'react'
import {Article, Pagination, PaginationItem, Icon, Footer} from 'react-components'

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


const ARTICLE_UI = `
<Article>
  <h1>Maybe together save dress sentence being shaking</h1>
  <h2 className="byline">Written on JULY 12, 2019 , Less than a cup of ☕️ reading time</h2>
  <p>
    gentle actual <b>wild</b> changing himself weigh cannot visit price there supply
    material product prize decide your what slow rapidly scene century control her printed
  </p>
  <p>
    cave show instrument brush market many salmon <a>health</a> mean recent someone fresh lion log occur vessels surrounded
    brief hurried whatever down up basket activity cave show instrument brush market many salmon health mean recent
    someone fresh lion log occur vessels surrounded brief hurried whatever down up basket activity
  </p>
  <ul>
    <li>balance</li>
    <li>activity</li>
    <li>hurried</li>
    <li>instrument</li>
  </ul>
  <p>
    gentle actual wild material product prize decide your what slow rapidly scene century control her printed
  </p>
</Article>
<Pagination>
  <PaginationItem>
    <h5><Icon name="chevron-thin-left" /> Previous</h5>
    <a>surrounded brief hurried whatever</a>
  </PaginationItem>
  <PaginationItem>
    <h5>Next <Icon name="chevron-thin-right" /></h5>
    <a>salmon health mean recent someone</a>
  </PaginationItem>
</Pagination>

<Footer>Copyright { (new Date().getFullYear()) }</Footer>
`
const ARTICLE_SCOPE = {Article, Pagination, PaginationItem, Icon, Footer}

export default class UIDemo extends Component {
  render() {
    return (
      <>
        <h1>UI</h1>
        <p>Small examples of ui components build with the framework</p>

        <h2>Author Container</h2>
        <DemoPlayground code={AUTHOR_UI} language="html" />

        <h2>Article</h2>
        <DemoPlayground code={ARTICLE_UI} scope={ARTICLE_SCOPE} language="html" />

      </>
    )
  }
}
