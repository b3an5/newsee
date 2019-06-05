import * as actions from './index'

describe('actions', () => {
  it('should return an array of aticles and a type of SAVE_TOP_STORIES', () => {
    const article = [{ name: 'article1' }, { name: 'article2' }]

    const expected = {
      type: 'SAVE_TOP_STORIES',
      article,
    }

    const results = actions.saveTopStories(article)

    expect(results).toEqual(expected)
  })
  it('should return an array of aticles and a type of SAVE_SEARCH_STORIES', () => {
    const article = [{ name: 'article1' }, { name: 'article2' }]

    const expected = {
      type: 'SAVE_SEARCH_STORIES',
      article,
    }

    const results = actions.saveSearchStories(article)

    expect(results).toEqual(expected)
  })
  it('should return an object of one article and a type of SAVE_CURRENT_STORY', () => {
    const article = { name: 'article1' }

    const expected = {
      type: 'SAVE_CURRENT_STORY',
      article,
    }

    const results = actions.saveCurrentStory(article)

    expect(results).toEqual(expected)
  })
})
