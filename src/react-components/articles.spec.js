import React from 'react'
import renderer from 'react-test-renderer'
import Article from './article'

describe('Article', () => {
  it('should match default snapshot', () => {
    const article = renderer.create(<Article>Hello</Article>)
    expect(article.toJSON()).toMatchSnapshot()
  })
})
