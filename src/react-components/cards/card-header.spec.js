import React from 'react'
import renderer from 'react-test-renderer'
import CardHeader from './card-header'

describe('CardHeader', () => {
  it('should match default snapshot', () => {
    const component = renderer.create(<CardHeader>Hello</CardHeader>)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
