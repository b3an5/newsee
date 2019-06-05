import { shallow } from 'enzyme'
import React from 'react'
import {
  mockCurrentStory,
  mockTopStories,
  mockSearchStories,
} from '../../utilities/mockData'
import { FullStory, mapStateToProps } from './FullStory'

describe('fullStory', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<FullStory currentStory={mockCurrentStory} />)
  })
  describe('fullStory component', () => {
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should match default state', () => {
      expect(wrapper.state()).toEqual({
        article: {},
      })
    })

    it('should call favorite article when button is pressed', () => {
      wrapper.setState({ article: mockCurrentStory })
      wrapper.find('.fav-butt').simulate('click')
      expect(localStorage.favorites).toEqual(JSON.stringify([mockCurrentStory]))
    })

    it('should match loading snapshot', () => {
      wrapper = shallow(<FullStory currentStory={{}} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('mstp', () => {
    it('should return an object with topstories and searchstories', () => {
      const mockState = {
        topStories: mockTopStories,
        searchStories: mockSearchStories,
        currentStory: mockCurrentStory,
      }
      const expected = {
        currentStory: mockCurrentStory,
      }
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })
})
