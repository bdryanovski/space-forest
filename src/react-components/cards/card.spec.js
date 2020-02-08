import React from 'react'
import renderer from 'react-test-renderer'
import Card from './card'

describe('Card', () => {
  it('should match default snapshot', () => {
    const component = renderer.create(<Card>Hello</Card>)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
