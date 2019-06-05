import { topHeadlineData } from './topHeadlinesCall'
import { mockTopStories } from './mockData'

describe('top headline call', () => {
  const mockUrl = 'https://newsapi.org/v2/top-headlines?'
  const mockResult = { articles: mockTopStories }
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResult),
    })
  )

  it('should fetch using correct url parameter', () => {
    topHeadlineData(mockUrl)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should return articles array', async () => {
    const result = await topHeadlineData(mockUrl)
    await expect(result).toEqual(mockResult.articles)
  })
})
