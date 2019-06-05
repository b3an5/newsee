import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

describe('Home', () => {
  let wrapper
  it('should match snapshot', () => {
    wrapper = shallow(<Home />)
    expect(wrapper).toMatchSnapshot()
  })
})
