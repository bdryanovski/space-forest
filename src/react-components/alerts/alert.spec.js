import React from 'react'
import renderer from 'react-test-renderer'
import Alert from './alert'

describe('Alert', () => {
  it('should match default snapshot', () => {
    const component = renderer.create(<Alert>Hello</Alert>)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
