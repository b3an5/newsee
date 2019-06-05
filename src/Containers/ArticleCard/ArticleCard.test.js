import React from 'react'
import { shallow } from 'enzyme'
import { saveCurrentStory } from '../../actions/index'
import { mockCurrentStory } from '../../utilities/mockData'
import { mapDispatchToProps, ArticleCard } from './ArticleCard'

describe('ArticleCard', () => {
  describe('articleCard component', () => {
    let wrapper
    it('should match snapshot', () => {
      wrapper = shallow(
        <ArticleCard
          storyInfo={mockCurrentStory}
          key={mockCurrentStory.title}
        />
      )

      expect(wrapper).toMatchSnapshot()
    })
  })
  describe('map dispatch to props', () => {
    it('it should call dispatch with saveCurrentStory', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = saveCurrentStory([{ title: 'example' }])

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.saveCurrentStory([{ title: 'example' }])

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})
