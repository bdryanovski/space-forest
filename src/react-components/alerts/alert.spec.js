import React from 'react'
import Alert, { ALERT_TYPES } from './alert'
import {mount, shallow} from 'enzyme'

describe('Alert', () => {
  it('should match default snapshot', () => {
    const component = shallow(<Alert>Hello</Alert>)
    expect(component).toMatchSnapshot()
  })

  it('should remove it when close is clicked', () => {
    const wrapper = mount(<Alert>Hello</Alert>)
    const closeBtn = wrapper.find('.alert-close')
    closeBtn.simulate('click')
    expect(wrapper.find('.alert')).toHaveLength(0)
  })

  it('should not have clossable button', () => {
    const wrapper = mount(<Alert closable={false}>Hello</Alert>)
    expect(wrapper.find('.alert-close')).toHaveLength(0)
  })

  it('should create alert based on types', () => {
    ALERT_TYPES.forEach((type) => {
      const wrapper = mount(<Alert type={type}>Hello</Alert>)
      expect(wrapper.find(`.${type}`)).toHaveLength(1)
    })
  })

  it('should NOT create alert for unknown type', () => {
    const wrapper = mount(<Alert type={ 'I-DONT-EXIST' }>Hello</Alert>)
    expect(wrapper.find('.I-DONT-EXIST')).toHaveLength(0)
  })
})
