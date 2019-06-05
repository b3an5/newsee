import * as actions from '../actions/index'
import { mockSearchStories } from '../utilities/mockData'
import { SearchReducer } from './searchReducer'

describe('search reducer', () => {
  it('should return init state', () => {
    const expected = []
    const result = SearchReducer(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should return an array of objects that are passed in', () => {
    const action = actions.saveSearchStories(mockSearchStories)
    const result = SearchReducer([], action)
    expect(result).toEqual(mockSearchStories)
  })
})
