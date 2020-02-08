import React from 'react'
import renderer from 'react-test-renderer'
import Footer from './footer'

describe('Footer', () => {
  it('should match default snapshot', () => {
    const component = renderer.create(<Footer>Hello</Footer>)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
