import React from 'react'
import renderer from 'react-test-renderer'
import {Header1, Header2, Header3, Header4, Header5, Header6} from './index'

describe('Headers', () => {
  it('should Header 1 match default snapshot', () => {
    const header = renderer.create(<Header1>Hello</Header1>)
    expect(header.toJSON()).toMatchSnapshot()
  })
  it('should Header 2 match default snapshot', () => {
    const header = renderer.create(<Header2>Hello</Header2>)
    expect(header.toJSON()).toMatchSnapshot()
  })
  it('should Header 3 match default snapshot', () => {
    const header = renderer.create(<Header3>Hello</Header3>)
    expect(header.toJSON()).toMatchSnapshot()
  })
  it('should Header 4 match default snapshot', () => {
    const header = renderer.create(<Header4>Hello</Header4>)
    expect(header.toJSON()).toMatchSnapshot()
  })
  it('should Header 5 match default snapshot', () => {
    const header = renderer.create(<Header5>Hello</Header5>)
    expect(header.toJSON()).toMatchSnapshot()
  })
  it('should Header 6 match default snapshot', () => {
    const header = renderer.create(<Header6>Hello</Header6>)
    expect(header.toJSON()).toMatchSnapshot()
  })
})
