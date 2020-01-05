import React, { Component } from 'react'
import LayoutArticleDemo from './layout-article-demo'

export default class LayoutDemo extends Component {
  render() {
    return (
      <>
        <h1>Layouts</h1>
        <p>Exaple layouts and components</p>

        <h2>Article</h2>
        <LayoutArticleDemo />

      </>
    )
  }
}
