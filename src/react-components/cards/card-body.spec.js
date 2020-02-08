import React from 'react'
import renderer from 'react-test-renderer'
import CardBody from './card-body'

describe('CardBody', () => {
  it('should match default snapshot', () => {
    const component = renderer.create(<CardBody>Hello</CardBody>)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
